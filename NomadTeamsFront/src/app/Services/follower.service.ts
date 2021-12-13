import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class FollowerService {
  constructor(
    private _httpClient: HttpClient,
    private configservice: ConfigService
  ) {}

  public createFollow(user_id_main:any, user_id_second: any) {

    let follow = {
      'user_id_main' : user_id_main,
      'user_id_second': user_id_second
    }

    return this._httpClient.post(this.configservice.url+'/api/follow/crear',follow)
  }

  public verificar_follow(id1:any, id2:any){

    return this._httpClient.get(this.configservice.url+'/api/follow/ver/'+id1+'/'+id2);

  }

  public unfollow(id1:any, id2:any){
    return this._httpClient.get(this.configservice.url+'/api/follow/borrar/'+id1+'/'+id2);
  }

  public post_followers(id:any){
    return this._httpClient.get(this.configservice.url+'/api/follow/post/'+id);
  }

}
