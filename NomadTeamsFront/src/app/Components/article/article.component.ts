import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  public article: any = {};
  public reply = false;
  public post_id:any;
  public user_id:any;
  public comments:any

  constructor(
    private _articleService: ArticleService,
    private rutactiva: ActivatedRoute,
    private _commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.user_id=JSON.parse(localStorage.getItem('usuario')!).id;
    this.rutactiva.params.subscribe((params) => {
      this.datosArticulos(params.id);
      this.post_id=params.id;
      this.listComments(params.id);
    });
  }
  public datosArticulos(id: any) {
    this._articleService.viewArticle(id).subscribe(
      (article) => {
        console.log(article);
        this.article = article;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public clickReply() {
    this.reply = !this.reply;
  }

  public createComment(datosComment: any) {
    datosComment.user_id=this.user_id;
    datosComment.post_id=this.post_id;
    this._commentService.createComment(datosComment).subscribe(
      (data) => {
        console.log(data);
        window.location.href = '/article/' + this.post_id
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public listComments(id:any){
    this._commentService.listComments(id).subscribe(
      (data) => {
        this.comments= data;


      },
      (error) => {
        console.log(error);
      }
    );
  }

}
