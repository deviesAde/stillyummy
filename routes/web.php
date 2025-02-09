<?php

use App\Http\Controllers\CartController;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function (Request $request) {
    if ($request->user()?->role === 'Merchant') {
        return redirect('/merchant');
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

    Route::prefix('/merchant')->group(function () {
        Route::get('/', [MerchantController::class, 'index'])->name('merchant.index');
        Route::get('/products', [MerchantController::class, 'index_products'])->name('merchant.products');
        Route::get('/Analytic', [MerchantController::class, 'index_analytic'])->name('merchant.analytic');
    })->middleware(MerchantAuthor::class);

    Route::resource('/transaction', TransactionController::class);

    Route::get('/RiwayatTransaksi', [TransactionController::class, 'index_riwayat'])->name('transaction.riwayat');

    Route::middleware(MerchantAuthor::class)->group(function () {
        Route::prefix('product')->group(function () {
            Route::get('/create', [ProductController::class, 'create'])->name('product.create');
            Route::post('/', [ProductController::class, 'store'])->name('product.store');
        });
    });


    Route::middleware(UserAuthor::class)->group(function () {
        Route::prefix('/cart')->group(function () {
            Route::get('/', [CartController::class, 'index'])->name('cart.index');
        });
    });
});

Route::get('/product/{id}', [ProductController::class, 'GetProduct'])->name('product.index');

require __DIR__ . '/auth.php';
