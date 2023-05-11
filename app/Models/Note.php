<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    use HasFactory;
    public function eleve(){
        return $this->belongsTo(Eleve::class);
    }

    public function matiere(){
        return $this->belongsTo(Matiere::class);
    }
}
