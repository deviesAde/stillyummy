<?php

use App\Http\Middleware\AdminAuthor;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function(){
    Route::get('/');
    
})->middleware(['auth',AdminAuthor::class]);
?>