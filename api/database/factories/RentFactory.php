<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Rent::class, function (Faker $faker) {
    return [
        'user_id' => rand(1,1),
        'client_id' => rand(1,1),
        'start' => now(),
        'end' => now(),
        'status' => $faker->text(12),
        'description' => $faker->paragraph(2)
        ];
});
