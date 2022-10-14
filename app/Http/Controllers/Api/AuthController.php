<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Resources\Api\AuthResource;
use App\Models\User;
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

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response([
                'error' => 'The provided credentials are not correct',
            ], 422);
        }

        $user = Auth::user();

        return new AuthResource($user);
    }
}
