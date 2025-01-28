<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\MerchantController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\WalletCOntroller;
use App\Http\Middleware\MerchantAuthor;
use App\Http\Middleware\UserAuth;
use App\Http\Middleware\UserAuthor;
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

Route::middleware('auth')->group(function () {
    Route::get('/profilesetting', [ProfileController::class, 'edit'])->name('profilesetting');
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('Wallet', WalletCOntroller::class);
    Route::resource('merchant', MerchantController::class)->middleware(MerchantAuthor::class);

    Route::middleware(UserAuthor::class)->group(function () {
        Route::resource('transaction', TransactionController::class);
        Route::prefix('/cart')->group(function () {
            Route::get('/', [CartController::class, 'index'])->name('cart.index');
        });
    });
});

require __DIR__ . '/auth.php';
