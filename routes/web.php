<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\UserAuth;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function (Request $request) {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/Product/{id}', [ProductController::class, 'GetProduct']);

Route::get('/error', function () {
    return redirect()->back()->with('error', 'test');
});

Route::middleware('auth')->group(function () {
    Route::get('/profilesetting', [ProfileController::class, 'edit'])->name('profilesetting');
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
