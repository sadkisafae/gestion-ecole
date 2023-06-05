<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eleve extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ["id",'nom','prenom','date_de_naissance','adresse','email','telephone',"classe_id"];
    protected $with=["classes","notes"];
    protected $table="eleves";


    public function classes(){
        return $this->belongsTo(Classe::class,"classe_id","id");
    }

    public function notes(){
        return $this->hasMany(Note::class);
    }

    public function users(){
        return $this->belongsTo(User::class,"user_id","id");
    }

}
