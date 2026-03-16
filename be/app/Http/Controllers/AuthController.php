<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
   public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (!$token = auth('api')->attempt($credentials)) {
        return response()->json(['error' => 'Email atau Password Salah'], 401);
    }

    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'user' => auth('api')->user()
    ]);
}
}
