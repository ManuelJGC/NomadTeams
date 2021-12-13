import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }
  public error=false;

  public register(user:any){
    this._userService.register(user).subscribe(
      data => {
        console.log(data);
        let us:any=data;
        localStorage.setItem('usuario', JSON.stringify(us.user));
        window.location.href = "/feed";
      },
      error => {
        console.log(error);
        this.error=true;
      }
    )
  }

}
