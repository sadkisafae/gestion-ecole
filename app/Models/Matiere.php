<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matiere extends Model
{
    use HasFactory;
    public function enseignant(){

        return $this->belongTo(Enseignant::class)
    }
    public function notes(){
        return $this->hasMany(Note::class)
    }
}
