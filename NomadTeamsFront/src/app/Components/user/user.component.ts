import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';
import { FollowerService } from 'src/app/Services/follower.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private _userService: UserService,
    private _articleService: ArticleService,
    private rutactiva: ActivatedRoute,
    private _followService: FollowerService
  ) {}

  public user:any = {};
  public post: any;
  public followup=false;
  public id_user:any;




  ngOnInit(): void {
    this.rutactiva.params.subscribe((params) => {
      this.id_user = params.id;
      this.listaArticlesProfile(params.id);
      this.verificar_follow(params.id);
      if(params.id==JSON.parse(localStorage.getItem('usuario')!).id){
        window.location.href = '/profile/'
      }
    });


  }

  public listaArticlesProfile(id: any) {
    this._articleService.profileArticles(id).subscribe(
      (data) => {
        let id:any = data;
        let user_id =id[0].user_id;
        this.post = data;
        // console.log(this.post);
        this.datos_user(user_id);
      },
      (error) => {
        // console.log(error)
      }
    );
  }

  public datos_user(id:any){
    this._userService.obtener_datos(id).subscribe(
      data =>{
        // console.log(data);
        this.user = data;

      }
    )
  }

  public follow() {
    this._followService.createFollow(JSON.parse(localStorage.getItem('usuario')!).id,this.user.id).subscribe(
      data => {
        console.log(data);
        window.location.href = '/user/'+this.user.id;
      }
    )

  }

  public verificar_follow(id:any){
    this._followService.verificar_follow(JSON.parse(localStorage.getItem('usuario')!).id,id).subscribe(
      data =>{
        console.log(data);
        this.followup = true;
      },
      error =>{
        console.log(error);
        this.followup = false;
      }
    );
  }

  public unfollow() {
    this._followService.unfollow(JSON.parse(localStorage.getItem('usuario')!).id, this.id_user).subscribe(
      data =>{
        console.log(data);
        window.location.href = '/user/'+this.user.id;
      }
    )

  }





}
