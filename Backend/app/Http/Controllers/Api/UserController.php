<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use PharIo\Manifest\Email;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([ //esto es la parte de las validaciones al momento de ingresar datos, es decir que si no esta llenado un rato no le deja ingresar
            'name' => 'required',
            'apellidopaterno' => 'required',
            'apellidomaterno' => 'required',
            'rol' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);
        $user = new User();
        $user->name = $request->name;
        $user->apellidopaterno = $request->apellidopaterno;
        $user->apellidomaterno = $request->apellidomaterno;
        $user->rol = $request->rol;
        $user->email = $request->email;
        $user->password = Hash::make($request->password); //esto es para archivar datos 
        $user->save();

        return response()->json([
            "status" => 1,
            "msg" => "Registro exitoso",
        ]);
    }
    public function login(Request $request)
    {
        //validar esto campos 
        $request->validate([
            'email' => "required|email",
            'password' => "required",
        ]);
        $user = User::where("email", "=", $request->email)->first(); //esto first le dice que solo traiga 1

        if (isset($user->id)) { //el isset verifica si dicha variable esta definia o no
            if (Hash::check($request->password, $user->password)) {
                //creacion de token 
                $token = $user->createToken("auth_token")->plainTextToken;

                return response()->json([
                    "status" => 1,
                    "msg" => "Usuario logeado exitoso",
                    "access_token" => $token,
                ]);
            } else {
                return response()->json([
                    "status" => 0,
                    "msg" => "Contraseña incorrecta",
                ], 404);
            }
        } else {
            return response()->json([
                "status" => 0,
                "msg" => "Usuario no registrado",
            ], 404);
        }
    }
    public function userProfile()
    {
        return response()->json([
            "status" => 1,
            "msg" => "Acerca del perfil de usuario",
            "data" => auth()->user(),
        ]);
    }
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            "status" => 1,
            "msg" => "Cierre de sesion",

        ]);
    }
}
