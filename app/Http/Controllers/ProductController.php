<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public static function GetProductList()
    {
        $Products = [];
        return $Products;
    }

    public function GetProductForUser($id)
    {
        $Product = [];
        return Inertia::render('User/Product/Product', ["Product" => $Product]);
    }

    public function GetProductForAdmin($id)
    {
        $Product = [];
        return Inertia::render('Admin/Product/Product', ["Product" => $Product]);
    }

    public function GetProductForMerchant($id)
    {
        $Product = [];
        return Inertia::render('Merchant/ProductPreview/Product', ["Product" => $Product]);
    }

    public function create(Request $request)
    {
        return Inertia::render('Merchant/ProductUpload/Create');
    }

    public function createbatch(Request $request)
    {
        return Inertia::render('Merchant/ProductUploadBatch/CreateBatch');
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
