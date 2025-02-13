<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Admin User',
            'email' => 'admin@gmail.com',
            'phone' => '1234567890',
            'email_verified_at' => now(),
            'password' => Hash::make('password'), 
            'role' => 'Admin',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'name' => 'Merchant User',
            'email' => 'merchant@gmail.com',
            'phone' => '0987654321',
            'email_verified_at' => now(),
            'password' => Hash::make('password'), 
            'role' => 'Merchant',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'name' => 'Regular User',
            'email' => 'user@gmail.com',
            'phone' => '1122334455',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'role' => 'User',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
