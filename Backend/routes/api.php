<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\TareasControllerController;
use App\Http\Controllers\RespuestaController;
use App\Http\Controllers\ConsultaControllerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::group(['middleware' => ["auth:sanctum"]], function () {
    Route::get('user-profile', [UserController::class, 'userProfile']);
    Route::get('logout', [UserController::class, 'logout']);

    //Tarea
    
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/tarea', [TareasControllerController::class, 'index']);
Route::post('/tarea', [TareasControllerController::class, 'store']);
Route::put('/tarea/{id}', [TareasControllerController::class, 'update']);
Route::delete('tarea/{id}', [TareasControllerController::class, 'destroy']);
//consulta
Route::get('/consulta', [ConsultaControllerController::class, 'index']);
Route::post('/consulta', [ConsultaControllerController::class, 'store']);
Route::put('/consulta/{id}', [ConsultaControllerController::class, 'update']);
Route::delete('consulta/{id}', [ConsultaControllerController::class, 'destroy']);
