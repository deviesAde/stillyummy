<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Admin extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create(
            ['email' => 'radhitya@gmail.com',
                'name'=> 'Tsaqif',
                'password' => 'Tsaqif10!',
                'role' => 'Admin',
                'phone'=>'085156368889'
            ]
        );
    }
}
