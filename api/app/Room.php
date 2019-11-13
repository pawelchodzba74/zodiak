<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    // protected $fillable = [];    //

    // protected $guarded= [];    //
    public function rents()
    {
        return $this->belongsToMany(Rent::class)->withTimestamps();
    }


}
