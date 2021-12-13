import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  public user: any;
  public article: any;
  constructor(private _articleService: ArticleService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario')!);
  }

  public createArticle(datosArticle: any) {
    datosArticle.user_id = this.user.id;
    this._articleService.createArticle(datosArticle).subscribe(
      (data) => {
        console.log(data);
        this.article = data;
        window.location.href = '/article/' + this.article.post.id;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
