<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class User extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create(
            ['email' => 'tsaqifradhitya@gmail.com',
                'name'=> 'Tsaqif',
                'password' => 'Tsaqif10!',
                'role' => 'User',
                'phone'=>'085156360779'
            ]
        );
    }
}
