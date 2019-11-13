<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['name', 'telephon', 'email', 'factory', 'city', 'street', 'nip', 'service_name' ];
    // protected $guarded= [];
        //
}
