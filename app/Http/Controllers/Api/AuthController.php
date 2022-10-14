<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Resources\Api\AuthResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function bcrypt;
use function response;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->only('name', 'email', 'password');

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        return new AuthResource($user);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => [
                'required',
            ],
        ]);

        if (!Auth::attempt($credentials)) {
            return response([
                'error' => 'The provided credentials are not correct',
            ], 422);
        }

        $user = Auth::user();

        return new AuthResource($user);
    }
}
