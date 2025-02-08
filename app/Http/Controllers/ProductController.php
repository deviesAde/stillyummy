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
}
