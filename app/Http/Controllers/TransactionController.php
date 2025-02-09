<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\Snap;
use Symfony\Component\Uid\Ulid;
use Illuminate\Support\Facades\Validator;

use function Laravel\Prompts\error;

class TransactionController extends Controller
{
    public function index_riwayat()
    {
        return Inertia::render('Transaction/Finish');
    }
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

    public function store(Request $Request)
    {
        Config::$serverKey = env("MIDTRANS_SERVER_KEY");
        Config::$isProduction = false;

        $Request->validate(['item_details' => 'required']);
        // $item_details = [
        //     [
        //         "id" => "item-001",
        //         "name" => "Product A",
        //         "price" => 50000,
        //         "quantity" => 1,
        //         "image_url" => fake("id_ID")->imageUrl(),  // Foto produk A
        //     ],
        //     [
        //         "id" => "item-002",
        //         "name" => "Product B",
        //         "price" => 50000,
        //         "quantity" => 1,
        //         "image_url" => fake("id_ID")->imageUrl(),  // Foto produk B
        //     ]
        // ];

        $params = array(
            'transaction_details' => array(
                'order_id' => Ulid::generate(),
            ),
            'customer_details' => array(
                'first_name' => $Request->user()->name,
                'last_name' => $Request->user()->name,
                'email' => $Request->user()->email,
                'phone' => $Request->user()->phone,
            ),
            "item_details" => $Request->validated(),
            'custom_expiry' => array(
                'start_time' => now()->toIso8601String(),
                'duration' => 1,
                "units" => "hours"
            ),
        );

        $SnapToken =  Snap::createTransaction($params);
        return redirect()->route('transaction.create')->with('success', $SnapToken);
    }
}
