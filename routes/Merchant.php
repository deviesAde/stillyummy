<?php

use App\Http\Controllers\MerchantController;
use App\Http\Controllers\MerchantTransactionController;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\MerchantAuthor;
use Illuminate\Support\Facades\Route;

Route::prefix('merchant')->group(function () {
    Route::post('/', [ProductController::class, 'store'])->name('merchant.product.store');
    Route::prefix('product')->group(function () {
        Route::get('/create', [ProductController::class, 'create'])->name('merchant.product.create');
        Route::get('/createbatch', [ProductController::class, 'createbatch'])->name('merchant.product.createbatch');
    });
    Route::get('/', [MerchantController::class, 'index'])->name('merchant.index');
    Route::get('/products', [MerchantController::class, 'index_products'])->name('merchant.products');
    Route::get('/Analytic', [MerchantController::class, 'index_analytic'])->name('merchant.analytic');
    Route::prefix('/transaction')->group(function(){
        Route::get('/',[MerchantTransactionController::class, 'index'])->name('merchant.transaction.index');
        Route::get('/Selesai',[MerchantTransactionController::class, 'Selesai'])->name('merchant.transaction.riwayat');
        Route::get('/{id}',[MerchantTransactionController::class, 'Detail'])->name('merchant.transaction.detail');
    });
})->middleware(['auth', MerchantAuthor::class]);
