<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('path');
            $table->string('file_name');
            $table->string('mime_type');
            $table->string('disk')->default('local');
            $table->string('file_hash', 64)->unique();
            $table->string('collection')->nullable();

            $table->unsignedBigInteger('size');

            $table->string('user_id');

            $table->timestamps();
        });

        Schema::table('images', function (Blueprint $table) {
            // relation
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
