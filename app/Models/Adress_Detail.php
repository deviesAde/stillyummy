<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PhpParser\Builder\Use_;

class Adress_Detail extends Model
{
    //
    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function Address()
    {
        return $this->belongsTo(User::class);
    }
}
