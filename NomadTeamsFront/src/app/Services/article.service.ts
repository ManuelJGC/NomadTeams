import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private configservice: ConfigService,
    private _httpClient: HttpClient,
  ) { }

  public listArticle(){
    return this._httpClient.get(this.configservice.url+"/api/post/lista")
  }

  public createArticle(post:any){
    return this._httpClient.post(this.configservice.url+"/api/post/crear",post)
  }

  public viewArticle(id:any){
    return this._httpClient.get(this.configservice.url+"/api/post/ver/"+id)
  }

  public profileArticles(id:any){
    return this._httpClient.get(this.configservice.url+"/api/post/ver_usuario/"+id)
  }
}
