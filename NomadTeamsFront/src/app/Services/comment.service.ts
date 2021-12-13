import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private _httpClient: HttpClient, private configservice: ConfigService) {}

  public createComment(content: any) {
    return this._httpClient.post(
      this.configservice.url + '/api/comment/crear',content)
    }

  public listComments(post_id:any){
    return this._httpClient.get(this.configservice.url + '/api/comment/ver/'+post_id)
  }


}
