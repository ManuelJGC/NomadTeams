<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class postController extends Controller{
    public function lista() {
        $post = Post::select('post.*', 'user.nombre as nombre', 'user.id as user_id', 'user.apellidos as apellidos')
        ->join('user', 'user.id', '=', 'post.user_id')
        ->orderBy('post.id', 'desc')
        ->get();

        return response() -> json($post, 200);
    }

    public function crear(Request $request){

        $validation = Validator::make($request->all(),[
            'tittle'            => 'required',
            'description'       => 'required',
            'content'           => 'required',
            'user_id'           => 'required'
        ]);

        if($validation->fails()){
            $data = [
                'code'      => 400,
                'message'   => 'error al validar datos',
                'error'     => $validation->errors()
            ];
        }else{

            $post = new Post();
            $post->tittle = $request->tittle;
            $post->description = $request->description;
            $post->content = $request->content;
            $post->user_id = $request->user_id;
            $post->save();

            $data = [
                'code'      => 200,
                'message'   => 'post guardado correctamente',
                'post'     => $post
            ];

        }
        return response()->json($data,$data['code']);

    }

    public function ver_post($id){
        $post = Post::select('post.*', 'user.nombre as nombre', 'user.id as user_id', 'user.apellidos as apellidos')
        ->join('user', 'user.id', '=', 'post.user_id')
        ->where('post.id', '=', $id)
        ->first();

        return response()->json($post, 200);
    }

    public function post_del_usuario($id){
        $post = Post::select('post.*', 'user.nombre as nombre', 'user.id as user_id', 'user.apellidos as apellidos')
        ->join('user', 'user.id', '=', 'post.user_id')
        ->where('user.id', '=', $id)
        ->orderBy('post.id', 'desc')
        ->get();

        return response()->json($post,200);
    }

}
