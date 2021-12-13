import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { FollowerService } from 'src/app/Services/follower.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private _articleService: ArticleService, private _followService:FollowerService) { }
  public post:any;
  public post_follow:any;

  ngOnInit(): void {
    this.list_todo();
    this.list_followers();
  }

  public list_todo(){
    this._articleService.listArticle().subscribe(
      data=>{
       this.post=data;
      },
      error=>{
        // console.log(error)
      }
    )
  }

  public list_followers(){
    this._followService.post_followers(JSON.parse(localStorage.getItem('usuario')!).id).subscribe(
      data =>{
        console.log(data);
        this.post_follow = data;
      }
    )
  }

}
