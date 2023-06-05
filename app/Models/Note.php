<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    public $timestamps = false;
    protected $fillable = ["id",'eleve_id',"matiere_id"];
    // protected $with=["matieres"];
    protected $table="notes";
    use HasFactory;
    public function eleves(){
        return $this->belongsTo(Eleve::class,"eleve_id");
    }
    public function matieres(){
        return $this->belongsTo(Matiere::class,"matiere_id");
    }
}
