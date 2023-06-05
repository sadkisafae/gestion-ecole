<?php

namespace App\Http\Controllers;

use App\Models\Eleve;
// use App\Models\Classe;
use Illuminate\Http\Request;

class EleveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $eleves = Eleve::all();
        // $role = $request->user()->role;
        return $eleves;
        // return Classe::select('id','nom','niveau')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $request->validate([
            'nom'=>'required',
            'prenom'=>'required',
            'date_de_naissance'=>'required',
            'adresse'=>'required',
            "telephone"=>"required",
            'classe_id'=>'required',
            'user_id'=>'required',
       ]);
        $e = new Eleve();
        $e->nom = $request->nom;
        $e->prenom = $request->prenom;
        $e->date_de_naissance = $request->date_de_naissance;
        $e->adresse = $request->adresse;
        $e->telephone = $request->telephone;
        $e->classe_id = $request->classe_id;
        $e->user_id = $request->user_id;
        $e->save();
        return ["message"=>"Eleve has been created succfully"];

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Eleve::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Eleve $Eleve)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $fields = $request->validate([
               'nom'=>'required',
            'prenom'=>'required',
            'date_de_naissance'=>'required',
            'adresse'=>'required',
            "telephone"=>"required",
            'classe_id'=>'required',
            'user_id'=>'required'

       ]);

       $Eleve =  Eleve::find($id);

       if(!$Eleve){
        return response()->json(["message"=>"this Eleve doesn't exist"]);
       }else{
            $Eleve->update($fields);
            return response()->json(["message"=>"dtudent has been update succefully"]);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Eleve::find($id);
        $user->delete();
        return ["message"=>"Eleve ". $id ." has been deleted successfully"];
    }
}
