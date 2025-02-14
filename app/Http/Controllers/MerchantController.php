<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MerchantController extends Controller
{
    public function index()
    {
        return Inertia::render('Merchant/Profile');
    }

    public function index_products()
    {
        return Inertia::render('Merchant/ProductList/Products');
    }
    public function index_analytic()
    {
        return Inertia::render('Merchant/Analytic/Analytic');
    }
}