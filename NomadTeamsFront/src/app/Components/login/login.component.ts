import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  public login(user:any){
    this._userService.login(user).subscribe(
      data =>{
        console.log(data);
        let us:any=data;
        localStorage.setItem('usuario', JSON.stringify(us.user));
        window.location.href = "/feed";
      },
      error =>{
        console.log(error);
      }
    )
  }

}
