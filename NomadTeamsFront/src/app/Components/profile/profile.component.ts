import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private _userService: UserService,
    private _articleService: ArticleService
  ) {}

  public user: any;
  public post: any;

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('usuario')!);
    console.log(this.user.id);
    this.listaArticlesProfile();

  }

  public listaArticlesProfile() {
    this._articleService.profileArticles(this.user.id).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => {
        // console.log(error)
      }
    );
  }
}
