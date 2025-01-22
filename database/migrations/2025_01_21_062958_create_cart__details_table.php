<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cart__details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('Product_id')->constrained('Produts')->onDelete('cascade');
            $table->foreignId('Cart_id')->constrained('Cart');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart__details');
    }
};
