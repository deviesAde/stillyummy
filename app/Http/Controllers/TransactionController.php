<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index(Request $Request){
        return Inertia::render('Transaction/OnProcess');
    }
}
