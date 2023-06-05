<?php

namespace App\Http\Controllers;

use App\Models\Enseignant;
use Illuminate\Http\Request;

class EnseignantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        return  response()->json(Enseignant::all());
    }


    public function store(Request $request)
    {


        $request->validate([
            'nom'=>'required',
            'prenom'=>'required',
            'date_de_naissance'=>'required',
            'adresse'=>'required',
            "telephone"=>"required",
            'user_id'=>'required',
       ]);
        $e = new Enseignant();
        $e->nom = $request->nom;
        $e->prenom = $request->prenom;
        $e->date_de_naissance = $request->date_de_naissance;
        $e->adresse = $request->adresse;
        $e->telephone = $request->telephone;
        $e->user_id = $request->user_id;
        $e->save();
        return ["message"=>"enseignant has been created succfully"];

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
         return Enseignant::find($id);
    }


    public function update(Request $request,$id)
    {
        $fields = $request->validate([
            'nom'=>'required',
            'prenom'=>'required',
            'date_de_naissance'=>'required',
            'adresse'=>'required',
            "telephone"=>"required",
            'user_id'=>'required'

       ]);

       $Enseignant =  Enseignant::find($id);

       if(!$Enseignant){
        return response()->json(["message"=>"this Enseignant doesn't exist"]);
       }else{
            $Enseignant->update($fields);
            return response()->json(["message"=>"dtudent has been update succefully"]);
       }
    }



    public function destroy($id)
    {
        $u = Enseignant::find($id);
        $u->delete();
        return ["message"=>"Enseignant ". $id ." has been deleted successfully"];
    }


}
