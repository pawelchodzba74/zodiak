<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rent extends Model
{
    // protected $guarded= [];
    protected $fillable = ['start', 'end', 'client_id', 'room_id', 'user_id', 'status', 'description', 'price'];    //
    protected $dates = ['start', 'end'];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function client() {
        return $this->belongsTo(Client::class);
        }
    public function rooms() {
        return $this->belongsToMany(Room::class)->withTimestamps();
    }

}
