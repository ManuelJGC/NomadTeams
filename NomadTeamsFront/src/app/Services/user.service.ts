import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private configservice: ConfigService,
    private _httpClient: HttpClient,

  ) { }

  public loged(){
    if(localStorage.getItem('usuario')){
      return true;
    }else{
      return false;
    }
  }

  public login(user:any) {
    return this._httpClient.post(this.configservice.url+"/api/user/login",user);
  }

  public register(user:any) {
    return this._httpClient.post(this.configservice.url+"/api/user/register",user);
  }

  public obtener_datos(id:any){
    return this._httpClient.get(this.configservice.url+"/api/user/datosUser/"+id);
  }

  public editar_datos(datos:any,id:any){
    return this._httpClient.post(this.configservice.url+"/api/user/editar/"+id,datos);
  }

  public editar_password(datos:any,id:any){
    return this._httpClient.post(this.configservice.url+"/api/user/editarPassword/"+id,datos);
  }


}
