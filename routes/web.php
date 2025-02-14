<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\KurirController;
use App\Http\Controllers\MerchantController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\WalletCOntroller;
use App\Http\Middleware\AdminAuthor;
use App\Http\Middleware\MerchantAuthor;
use App\Http\Middleware\UserAuth;
use App\Http\Middleware\UserAuthor;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TransactionUserController;

Route::get('/', function (Request $request) {
    $role = $request->user()?->role;
    if ($role === 'Merchant') {
        return redirect(route('merchant.index'));
    } else if ($role === 'Admin'){
        return redirect(route('admin.index'));
    }
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profilesetting', [ProfileController::class, 'edit'])->name('profilesetting');
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/wallet', [WalletCOntroller::class, 'index'])->name('wallet.index');
    Route::post('/wallet', [WalletCOntroller::class, 'TarikSaldo'])->name('wallet.post');

    Route::get('/admin/dashboard', [DashboardController::class, 'admin'])
        ->name('admin.dashboard')
        ->middleware(AdminAuthor::class);

    Route::get('/merchant/dashboard', [DashboardController::class, 'merchant'])
        ->name('merchant.dashboard')
        ->middleware(MerchantAuthor::class);

    Route::get('/user/dashboard', [DashboardController::class, 'user'])
        ->name('user.dashboard')
        ->middleware(UserAuthor::class);
});

Route::resource('Kurir', KurirController::class);

require __DIR__ . '/auth.php';
require __DIR__ . '/Admin.php';
require __DIR__ . '/User.php';
require __DIR__ . '/Merchant.php';

