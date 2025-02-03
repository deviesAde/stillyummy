<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index(Request $Request)
    {
        return Inertia::render('Transaction/OnProcess');
    }

    public function create(Request $Request)
    {
        return Inertia::render('Transaction/TransactionCreate');
    }

    public function show($transaction)
    {
        return Inertia::render('Transaction/TransactionDetail', ["ID" => $transaction]);
    }

    public function edit($transaction)
    {
        return Inertia::render('Transaction/TransactionEdit', ["ID" => $transaction]);
    }
}
