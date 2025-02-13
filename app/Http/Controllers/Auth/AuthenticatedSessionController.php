<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

       return $this->redirectToBasedOnRole();
    }

    /**
     * Destroy an authenticated session.
     */

        protected function redirectToBasedOnRole(): RedirectResponse
    {
        $user = Auth::user();

        if ($user->role === 'Admin') {
            return redirect()->intended(route('admin.dashboard'));
        } elseif ($user->role === 'Merchant') {
            return redirect()->intended(route('merchant.dashboard'));
        } elseif ($user->role === 'User') {
            return redirect()->intended(route('user.dashboard'));
        }

        return redirect()->intended(route('dashboard'));
    }
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
