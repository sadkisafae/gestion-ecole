<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Note::all());
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
            'note'=>'required',
            'eleve_id'=>'required',
            'matiere_id'=>'required',
       ]);
        $e = new Note();
        $e->note = $request->note;
        $e->eleve_id = $request->eleve_id;
        $e->matiere_id = $request->matiere_id;
        $e->save();
    }





    public function destroy($id)
    {

        $user = Note::find($id);
        $user->delete();
        return ["message"=>"eleve ". $id ." has been deleted successfully"];
    }


    // public function noteDeEtudiant($id){
    //     $notes = Note::where('eleve_id',$id)->get();
    //     $result = [];
    //     foreach($notes as $note){
    //         $obj = [
    //             'id' => $note->id,
    //             'note' => $note->note,
    //             'eleve_id' => $note->eleve_id,
    //             'classe_id' => $note->eleves->classe_id,
    //             'matiere_id' => $note->matiere_id,
    //             'matiere_nom' => $note->matieres->nom,
    //         ];

    //         $result[] = $obj;
    //     }

    //     return $result;

    // }
}
