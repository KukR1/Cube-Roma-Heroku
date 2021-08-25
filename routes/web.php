<?php

use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['middleware' => 'web'], function () {

    Route::get('/', 'HomeController@render');
    Route::get('/rooms', 'RoomsController@render');
    Route::get('/rooms/{id?}', 'RoomsController@renderSingleRoom');
    Route::get('/rooms/categories/{id?}', 'RoomsController@renderRoomsByCategory');
    Route::get('/contact', 'ContactController@render');
    Route::get('/measures-restrictions', 'MeasuresController@render');
    Route::post('/contact/email', 'ContactController@sendEmail');
});


Route::group([
    'prefix' => '{locale}',
    'where' => ['locale' => '[a-zA-Z]{2}'],
    'middleware' => 'setlocale'
], function () {

    Route::get('/', 'HomeController@render');
    Route::get('/rooms', 'RoomsController@renderwithLocale');
    Route::get('/rooms/{id?}', 'RoomsController@renderSingleRoomwithLocale');
    Route::get('/rooms/categories/{id?}', 'RoomsController@renderRoomsByCategorywithLocale');
    Route::get('/contact', 'ContactController@render');
    Route::get('/measures-restrictions', 'MeasuresController@render');
    Route::post('/contact/email', 'ContactController@sendEmail');
});
