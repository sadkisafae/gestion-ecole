<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Eleve;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\EleveController;
use App\Http\Controllers\EnseignantController;
use App\Http\Controllers\MatiereController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/





Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);
Route::post('refresh',[AuthController::class,'refresh']);
Route::post('me',[AuthController::class,'me']);

Route::resource('/eleves', EleveController::class);
Route::resource('/enseignants', EnseignantController::class);
Route::resource('/matieres', MatiereController::class);
Route::resource('/notes', NoteController::class);
Route::get('/notes/etudiant/{id}', [NoteController::class,'noteDeEtudiant']);
Route::resource('/classes', ClasseController::class);
Route::resource('/users', UserController::class);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {


    Route::group(['middleware'=>'admin'],function () {

    });
    Route::group(['middleware'=>'eleve'],function () {


    });

    Route::group(['middleware'=>'enseignant'],function () {

           });





});
//

// Route::get('/classes/search', ClasseController::class);
















