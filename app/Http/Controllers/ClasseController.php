<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use Illuminate\Http\Request;

class ClasseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()

    {

       return  response()->json(Classe::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {

    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'nom'=>'required',
            'niveau'=>'required'
       ]);
        $c =new Classe();
        $c->nom = $request->nom;
        $c->niveau = $request->niveau;
        $c->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $classe = Classe::find($id);
        return $classe;
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Classe $classe)
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
            'niveau'=>'required',


       ]);

       $Classe =  Classe::find($id);

       if(!$Classe ){
        return response()->json(["message"=>"this classe doesn't exist"]);
       }else{
            $Classe ->update($fields);
            return response()->json(["message"=>"dtudent has been update succefully"]);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Classe::find($id);
        $user->delete();
        return ["message"=>"classe ". $id ." has been deleted successfully"];
    }
    public function search($nom){

        return Classe::where('nom','like','%'.'$nom'.'%')->get();
    }
}
