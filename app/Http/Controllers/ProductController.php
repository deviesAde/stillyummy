<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $Products = [];
        return Inertia::render('Product', ["Products" => $Products]);
    }

    public function GetProduct($id)
    {
        $Product = [];
        return Inertia::render('Product/Product', ["Product" => $Product]);
    }

    public function create(Request $request)
    {
        return Inertia::render('Product/create');
    }

    public function store(Request $request)
    {
        $hasil = $request->validate([
            'ProductName' => 'required',
            'ProductPrice' => 'required|numeric|min:1',
            'ProductStock' => 'required|numeric|min:1',
            'ProductDescription' => 'required',
            'ProductPhoto' => 'required'
        ]);
    }
}
