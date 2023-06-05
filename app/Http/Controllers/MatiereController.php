<?php

namespace App\Http\Controllers;

use App\Models\Matiere;
use Illuminate\Http\Request;

class MatiereController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return  response()->json(Matiere::all());

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom'=>'required',
            'enseignant_id'=>'required',


       ]);
        $ma = new Matiere();
        $ma->nom = $request->nom;
        $ma->enseignant_id = $request->enseignant_id;
        $ma->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Matiere::find($id);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Matiere $matiere)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $fields = $request->validate([
            'nom'=>'required',
            'enseignant_id'=>'required',


       ]);

       $Matiere =  Matiere::find($id);

       if(!$Matiere){
        return response()->json(["message"=>"this Matiere doesn't exist"]);
       }else{
            $Matiere->update($fields);
            return response()->json(["message"=>"dtudent has been update succefully"]);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $u = Matiere::find($id);
        $u->delete();
        return ["message"=>"matiere ". $id ." has been deleted successfully"];
    }
}
