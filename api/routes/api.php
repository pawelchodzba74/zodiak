<?php


Route::group([
    'middleware' => 'api',
], function () {
    // Route::post('refresh', 'AuthController@refresh');
    // Route::post('me', 'AuthController@me');
    Route::post('login', 'AuthController@login');
});
Route::group([
    'middleware' => 'jwt.auth',
], function () {
    Route::post('logout', 'AuthController@logout');
    Route::get('rent', 'RentController@index');
    Route::put('rent/{id}', 'RentController@update');
    Route::delete('rent/{id}', 'RentController@destroy');
    Route::get('rent/{id}', 'RentController@show');

    Route::put('rent/status/{id}', 'RentController@status');
    Route::get('admin', 'AuthController@read');
    Route::post('signup', 'AuthController@signup');

});

Route::post('rent', 'RentController@store');
Route::get('rent/event/{room}', 'RentController@eventsFromClients');
// Route::get('mail', function() {
//     $rent = App\Rent::first();
//     return new App\Mail\Rented($rent);
// });
// Route::post('signup', 'AuthController@signup');
