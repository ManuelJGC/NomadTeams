<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\postController;
use App\Http\Controllers\commentController;
use App\Http\Controllers\followController;





//user
Route::get('/api/user/datosUser/{id}', [UserController::class, 'datosUser']);
Route::post('/api/user/login', [UserController::class, 'login']);
Route::post('/api/user/register', [UserController::class, 'register']);
Route::post('/api/user/editar/{id}', [UserController::class, 'editarDatos']);
Route::post('/api/user/editarPassword/{id}', [UserController::class, 'editarPassword']);


//post
Route::get('/api/post/lista', [PostController::class, 'lista']);
Route::post('/api/post/crear', [PostController::class, 'crear']);
Route::get('/api/post/ver/{id}', [PostController::class, 'ver_post']);
Route::get('/api/post/ver_usuario/{id}', [PostController::class, 'post_del_usuario']);

//comentarios
Route::post('/api/comment/crear', [commentController::class, 'crear']);
Route::get('/api/comment/ver/{id}', [commentController::class, 'ver']);

//follow
Route::post('/api/follow/crear', [followController::class, 'crear']);
Route::get('/api/follow/borrar/{id1}/{id2}', [followController::class, 'borrar']);
Route::get('/api/follow/ver/{id1}/{id2}', [followController::class, 'ver']);
Route::get('/api/follow/post/{id_user}', [followController::class, 'post']);