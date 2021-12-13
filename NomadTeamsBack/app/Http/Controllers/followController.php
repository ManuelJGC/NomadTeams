<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Follow;
use App\Models\Post;

class followController extends Controller
{
    
    public function crear(Request $request){

        $f = new Follow();

        $f->user_id_main = $request->user_id_main;
        $f->user_id_second  = $request->user_id_second;
        $f->save();
        return response()->json('Siguiendo', 200);

    }

    public function borrar($id1,$id2){

        $f = Follow::where('user_id_main', '=', $id1)->where('user_id_second', '=', $id2)->first();

        $f->delete();
        return response()->json('unfollow', 200);

    }

    public function ver($id1, $id2){
        $f = Follow::where('user_id_main', '=', $id1)->where('user_id_second', '=', $id2)->first();
        if($f){
            return response()->json(true,200);
        }else{
            return response()->json(false,400);
        }
        
    }

    public function post($id){
        $follow = Follow::select('follower.*')
        ->where('user_id_main', '=', $id)        
        ->get();

        for ($i=0; $i < $follow->count() ; $i++) { 
            $usuarios_seguidos[$i] = $follow[$i]['user_id_second'];

            $posts[$i] = Post::select('user.nombre','user.apellidos', 'post.*')
            ->where('user_id', '=', $follow[$i]['user_id_second'])
            ->join('user', 'user.id', '=', 'post.user_id')
            ->orderBy('post.id', 'desc')    
            ->get();
        }

        // var_dump($usuarios_seguidos); die();

        return response()->json($posts,200);
    }


}
