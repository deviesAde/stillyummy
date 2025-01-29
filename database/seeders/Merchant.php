<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Merchant extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create(
            ['email' => 'tsaqifa@gmail.com',
                'name'=> 'Tsaqif',
                'password' => 'Tsaqif10!',
                'role' => 'Merchant',
                'phone'=>'085156360789'
            ]
        );
    }
}
