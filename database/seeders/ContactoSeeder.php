<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contactos')->insert([
            'nombre'=>'Jeroni',
            'tel'=>'123456789',
            'num_libros'=>7
        ]); 
        DB::table('contactos')->insert([
            'nombre'=>'Rafael',
            'tel'=>'9876543321',
            'num_libros'=>8
        ]); 
        DB::table('contactos')->insert([
            'nombre'=>'Pedro',
            'tel'=>'58678483',
            'num_libros'=>20
        ]); 
     
    }
}
