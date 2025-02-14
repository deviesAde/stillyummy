<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TransactionUserController;
use App\Http\Middleware\UserAuthor;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', UserAuthor::class])->group(function () {
    Route::resource('/transaction', TransactionUserController::class);
    Route::post('/transaction/create', [TransactionUserController::class, 'To_Create_Page'])->name('transaction.createpost');
    Route::get('/RiwayatTransaksi', [TransactionUserController::class, 'index_riwayat'])->name('transaction.riwayat');

    Route::prefix('/cart')->group(function () {
        Route::get('/', [CartController::class, 'index'])->name('cart.index');
    });
    Route::get('/product/{id}', [ProductController::class, 'GetProductForUser'])->name('product.index');
});
