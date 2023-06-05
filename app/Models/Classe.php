<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ["id",'nom',"niveau"];

    public function eleves(){

        return $this->hasMany(Eleve::class);
    }

}
