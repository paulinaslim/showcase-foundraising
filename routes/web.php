<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

Route::get('/', function () {
    return view('home');
});

Route::get('/animations', function () {
    return view('pages.animations');
});
Route::get('/gsap', function () {
    return view('pages.gsap');
});
Route::get('/parallax', function () {
    return view('pages.parallax');
});

Route::get('/thankyou', function () {
    return view('pages.formSubmitted');
});

Route::get('/banners', function () {
    return view('pages.banners');
});


Route::post('/submit', [FormController::class, 'store']);
