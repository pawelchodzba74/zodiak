<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\RentRequest;
use App\Http\Requests\UpRentRequest;
use App\Http\Requests\StatusRequest;
use App\Rent;
use App\Client;
use App\Room;
use App\User;
use App\Http\Controllers\ClientController;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exception\JWTException;
use Illuminate\Support\Arr;
use \Illuminate\Support\Facades\Mail;
use App\Mail\Rented;
use App\Mail\isAccept;
use App\Jobs\RentSending;
class RentController extends Controller
{
    protected $client;
    public function __construct(ClientController $client)
    {
      $this->client = $client;
    }
    public function index()
    {
        $response = $this->buildRresponse($this->query());
        return response($response, 200);
    }
    private function buildRresponse($propResponse)
    {
        foreach ($propResponse['Rents'] as $rent) {
            $rent->room = $this->getRooms($rent->id);
            $rent->client = $propResponse['Clients']->firstWhere('id', $rent->client_id);

                if ($rent->user_id) {
                    $rent->user = $propResponse['Users']->firstWhere('id', $rent->user_id);
                }
            }
            return $propResponse['Rents'];
    }
    private function selectedRecord($table, $columns)
    {
        return DB::table($table)->select($columns)->get();
    }
    private function query()
    {
        return [
            "Rents"=> $this->selectedRecord('rents', [
                'id',
                'start',
                'end',
                'status',
                'client_id',
                'user_id',
                'description',
                'price'
            ]),
            "Clients"=> $this->selectedRecord('clients', [
                'id',
                'name',
                'telephon',
                'email',
                'factory',
                'city',
                'street',
                'nip',
                'service_name'
                ]),
            "Users" => $this->selectedRecord('users', [
                'id',
                'name'
                ])
        ];
    }
    public function show($id)
    {
        $rent = Rent::findOrFail($id);
        $rent['room'] = $this->getRooms($id)->toArray();
        $rent['room'] = array_map('strval', $rent['room']);
        $rent['client'] = $this->client->show($rent['client_id']);
        return response($rent, 200);
    }
    private function getRooms($id)
    {
        return Rent::find($id)->rooms()->pluck('id');
    }
    public function destroy($id)
    {
        $rent = Rent::findOrFail($id);
        $rent->delete();
        return response($rent, 200);
    }
    public function store(RentRequest $request)
    {
        $rent = $request->all();
        $datesTaken = $this->checkRooms($rent);
        if (count($datesTaken) > 0) {
            return response(["message"=>"the room(s) is occupied at this time", "datesTaken" => $datesTaken], 400);
        }
        $rooms = $request->input('room');
        $rent['client_id'] = $this->client->updateOrStore($request);
        $Rent = new Rent ($rent);
        $Rent->save();
        $Rent->rooms()->attach($rooms);
        $Rent['room'] = $rooms;
        // send email
        $email = $this->emailConfig('toAdmins@op.pl',$rent, User::all()->pluck('email'), 'emails.rented');
        $this->sendMail($email);

        return response($rent, 201);
    }
    //////// mail ///////////////////////////
    private function sendMail($email)
    {
        RentSending::dispatch($email)->delay(now()->addSecond(1));
        // Mail::to('pawulon@jk.op')->cc($email['cc'])->send(new Rented($email['message']));
    }
    private function emailConfig($to, $message , $cc, $view)
    {
        return [
            "to"=>$to,
            "message"=>$message,
            "cc"=>$cc,
            "view"=>$view
        ];
    }
    public function update(UpRentRequest $request, $id)
    {
        $rent = $request->all();
        $datesTaken = $this->checkRooms($rent, $id);
        if (count($datesTaken) > 0) {
            return response(["message"=>"the room(s) is occupied at this time", "datesTaken" => $datesTaken], 400);
        }
        $rent['user_id'] = $this->currentIdUser();
        $this->client->update($request, $request->input('client_id'));
        $Rent = Rent::findOrFail($id);
        $Rent->update($rent);
        $Rent->rooms()->sync($request->input('room'));
        return response($Rent, 200);
    }
    private function checkRooms($rent, $id = null)
    {
        $start = $rent['start'];
        $end = $rent['end'];
        $rooms = $rent['room'];

        $isReserved = [];
        foreach ($rooms as $room) {
            if($this->checkRoom($room, $start, $end, $id) > 0) {
                $isReserved[] =
                [
                    "room" => "$room",
                    "start"=> "$start",
                    "end" => "$end"
                ];
            };
        }
        return $isReserved;
    }
    private function checkRoom($room, $start, $end, $id = null)
    {
        return Room::find($room)->rents()->where([
            ['start','<=', $end],
            ['end','>=', $start],
            ['id','!=', $id]
        ])->count();
    }
    // other class !! /////
    public function eventsFromClients($room)
    {
        $rents = DB::table('rent_room')
            ->join('rents', 'rent_room.rent_id', '=', 'rents.id')
            ->where([
                ['rent_room.room_id','=',$room]
            ])
            ->select(
                'start',
                'end'
            )
            ->get();

        return response($rents, 200);
    }
    public function status(Request $request, $id)
    {

        $rent = $request->all();

        // $rent['user_id'] = $this->currentIdUser();
        //optimalization :  update only status end user_id
        // $Rent = Rent::findOrFail($id);
        $Rent = Rent::where('id',$id)->update([
            'status'=>  $rent['rentRow']['status'],
            'user_id'=> $this->currentIdUser()
            ]);
        // mail;
        if (!in_array($rent['option']['nameView'], ['pendding'])) {
            $cc = ['master@mailer.zodiak'];
            $email = $this->emailConfig(
                $rent['rentRow']['client_email'],
                $rent['rentRow'],
                $cc,
                'emails.'.$rent['option']['nameView']);
            $this->sendMail($email);
            // Mail::to('master@mailer.zodiak')->cc('cc@fggf')->send(new Rented($email));
        }
        return response($rent, 200);
    }
    private function currentIdUser()
    {
        return JWTAuth::parseToken()->authenticate()->id;
    }









}
