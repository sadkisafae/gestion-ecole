<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matiere extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ["id",'nom',"enseignant_id"];
    protected $with=["notes"];

    protected $table="matieres";

    public function enseignants(){

        return $this->belongsTo(Enseignant::class,"enseignant_id","id");
    }
    public function notes(){
        return $this->hasMany(Note::class);
    }
}
