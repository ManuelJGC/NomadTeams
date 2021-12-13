<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class userController extends Controller{


    public function login(Request $request){


        $validation = Validator::make($request->all(),[
            'email'          => 'required',
            'password'      => 'required'

        ]);

        if($validation->fails()){
            $data = [
                'code'      => 400,
                'message'   => 'error al iniciar sesion',
                'error'     => $validation->errors()
            ];
        }else{

            $user = User::where('email', '=', $request->email)->where('password', '=', $request->password)->first();
            if(!is_null($user)){
                $data = [
                    'code'      => 200,
                    'message'   => 'iniciar sesion correcto',
                    'user'      => $user
                ];
            }else{
                $data = [
                    'code'      => 400,
                    'message'   => 'inicio de sesion incorrecto'
                ];
            }

        }

        return response()->json($data,$data['code']);

    }

    public function register(Request $request){
        $validation = Validator::make($request->all(),[
            'nombre'        => 'required|string',
            'apellidos'     => 'required|string',
            'nickname'      => 'required|string',
            'email'         => 'required|email|unique:user',
            'password'      => 'required|min:3|confirmed',
        ]);

        if($validation->fails()){
            $data = [
                'code'      => 400,
                'message'   => 'error en register',
                'error'     => $validation->errors()
            ];
        }else{

            $user = new User();

            $user->nombre = $request->nombre;
            $user->apellidos = $request->apellidos;
            $user->nickname = $request->nickname;
            $user->email = $request->email;
            $user->password = $request->password;

            $user->save();

            $data = [
                'code'      => 200,
                'message'   => 'registrado correctamente',
                'user'     => $user
            ];

        }
        return response()->json($data, $data['code']);
    }

    public function datosUser ($id) {
        $user=User::where('id', '=',$id)->first();
        return response()->json($user, 200);
    }

    public function editarDatos(Request $request, $id){

        $usuario = User::find($id);

        if(!is_null($request->nombre)){
            $usuario->nombre = $request->nombre;
        }
        if(!is_null($request->apellidos)){
            $usuario->apellidos = $request->apellidos;
        }
        if(!is_null($request->nickname)){
            $usuario->nickname = $request->nickname;
        }
        $usuario->save();

        return response()->json($usuario, 200);

    }

    public function editarPassword(Request $request, $id){

        $user = User::find($id);

        if($request->pass1 != $request->pass2 || is_null($request->pass1) || is_null($request->pass2)){
            $data = [
                'code'  => 400,
                'message'   => 'las contraseñas no coinciden'
            ];
        }else{
            if($user->password != $request->passActual){
                $data = [
                    'code'  => 400,
                    'message'   => 'Contraseña actual incorrecta'
                ];
            }else{
                $user->password = $request->pass1;
                $user->save();
                $data = [
                    'code'  => 200,
                    'message'   => 'contraseña actualizada'
                ];
            }
        }
        return response()->json($data, $data['code']);

    }

}
