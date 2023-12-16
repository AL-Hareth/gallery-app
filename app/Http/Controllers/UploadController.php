<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $file = $request->file('image');

        // storing file in the databse
        auth()->user()->images()->create([
            'name' => $file->getClientOriginalName(),
            'user_id' => auth()->id(),
            'path' => $file->path(),
            'file_name' => $file->getClientOriginalName(),
            'mime_type' => $file->getClientMimeType(),
            'file_hash' => $file->hashName(),
            'size' => $file->getSize(),
            'disk' => 'local',
            'collection' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // This storage can be an S3 bucket
        Storage::disk('local')->put('public', $file);

        return redirect('/');
    }
}
