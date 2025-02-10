<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\Uid\Ulid;

class KurirController extends Controller
{
    public function index(Request $request)
    {
        $querry =  $request->input('q');
        if ($request->session()->has('access')) {
            $Data = [
                'id' => Ulid::generate(),
            ];
            return Inertia::render('Kurir/Kurir', ['querry' => $querry, 'access' => $request->session()->get('access'), 'Data' => $Data]);
        }
        return Inertia::render('Kurir/Kurir', ['querry' => $querry]);
    }

    public function store(Request $request)
    {
        $pass = '123';

        if ($request->input('pass') === $pass) {
            return redirect(route('Kurir.index').'?q=' . $request->input('q'))->with('access', true);
        }
        return redirect(route('Kurir.index').'?q=' . $request->input('q'))->withErrors('Password Salah');
    }
}
