<?php

namespace App\Http\Controllers;
use App\Models\Comment;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

class commentController extends Controller
{
    
    public function crear(Request $request){

        $comment = new Comment();
        $comment->content = $request->content;
        $comment->user_id = $request->user_id;
        $comment->post_id = $request->post_id;
        $comment->save();

        return response()->json('comentario agregado', 200);
        


    }

    public function ver($id){
        $c = Comment::select('comment.*', 'user.nombre as nombre', 'user.id as user_id', 'user.apellidos as apellidos')
        ->join('user', 'user.id', '=', 'comment.user_id')
        ->where('post_id', '=', $id)
        ->orderBy('comment.id', 'desc')
        ->get();

        return response()->json($c, 200);
    }


}
