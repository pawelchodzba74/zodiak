<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Client;

class ClientController extends Controller
{

    public function store(Request $request)
    {
        return Client::create($request->all());
    }
    public function updateOrStore(Request $request)
    {
        $client = $this->showName($request->input('name'));
       return count($client) ? $this->update($request, $client[0]['id'])['id'] : $this->store($request)['id'];


    }
    private function showName(string $name)
    {
        return Client::query()->where('name',$name)->get();
    }
    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        $client->update($request->all());
        return $client;

    }
    public function show($id)
    {
        $client = Client::findOrFail($id);
        return $client;
    }
    public function indexSelectedColumns($columns)
    {
        return Client::select($columns)->get();
    }



}
