<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MerchantTransactionController extends Controller
{
    public function index()
    {
        return Inertia::render('Merchant/TransactionOngoing/OnProcess');
    }

    public function Selesai()
    {
        return Inertia::render('Merchant/TransactionFinish/Finish');
    }

    public function Detal($id) {
        return Inertia::render('Merchant/TransactionDetail/TransactionDetail');
    }
}
