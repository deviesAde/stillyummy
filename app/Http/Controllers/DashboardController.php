<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function admin(): Response
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function merchant(): Response
    {
        return Inertia::render('Merchant/Dashboard');
    }

    public function user(): Response
    {
        return Inertia::render('User/Welcome');
    }
}