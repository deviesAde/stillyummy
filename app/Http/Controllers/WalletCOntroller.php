<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WalletCOntroller extends Controller
{
    public function index(){
        return Inertia::render('Wallet/Wallet');
    }

    public function TarikSaldo(){
        
    }
}
