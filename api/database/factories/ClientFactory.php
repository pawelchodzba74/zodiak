<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Client::class, function (Faker $faker) {
    return [

        'name' =>$faker->name,
        'telephon' =>$faker->e164PhoneNumber,
        'email' =>$faker->email,
        'factory' =>$faker->sentence(3),
        'nip' =>$faker->sentence(5),
        'street' =>$faker->streetName,
        'city' =>$faker->city,
        'service_name' =>$faker->sentence(5),
        'code' =>$faker->postcode
    ];
});
