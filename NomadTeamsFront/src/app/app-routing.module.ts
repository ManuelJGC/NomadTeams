import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './Components/article/article.component';
import { CreateArticleComponent } from './Components/create-article/create-article.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { EditpasswordComponent } from './Components/editpassword/editpassword.component';
import { FeedComponent } from './Components/feed/feed.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'editprofile', component: EditProfileComponent },
  { path: 'newarticle', component: CreateArticleComponent },
  { path: 'editPassword', component: EditpasswordComponent },
  { path: 'user/:id', component: UserComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
