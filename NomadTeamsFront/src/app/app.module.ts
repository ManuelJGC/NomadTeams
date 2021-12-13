import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FeedComponent } from './Components/feed/feed.component';
import { RegisterComponent } from './Components/register/register.component';
import { ArticleComponent } from './Components/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';

import { UserComponent } from './Components/user/user.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CreateArticleComponent } from './Components/create-article/create-article.component';
import { EditpasswordComponent } from './Components/editpassword/editpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeedComponent,
    RegisterComponent,
    ArticleComponent,
    LoginComponent,
    UserComponent,
    EditProfileComponent,
    ProfileComponent,
    CreateArticleComponent,
    EditpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
