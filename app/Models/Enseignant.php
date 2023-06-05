<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enseignant extends Model
{
    use HasFactory;

    protected $fillable = ['nom','prenom','date_de_naissance','adresse','email','telephone'];
    protected $with=["matieres"];


    public $timestamps = false;

    public function matieres(){
        return $this->hasOne(Matiere::class,"enseignant_id");
    }
    public function users(){
        return $this->belongsTo(User::class);
    }
}
