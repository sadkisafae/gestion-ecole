<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eleve extends Model
{
    use HasFactory;
    public function class(){
        return $this->belongsTo(Classe::class);
    }

    public function notes(){
        return $this->hasMany(Note::class);
    }

}
