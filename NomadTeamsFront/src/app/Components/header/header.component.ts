import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public iniciado:boolean=false;
  public user:any;

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.iniciado = this._userService.loged();
    if(this.iniciado){
      let us:any = localStorage.getItem('usuario');
      this.user = JSON.parse(us);
      // console.log(this.user);
    }
  }

  public cerrarSesion(){
    localStorage.removeItem('usuario');
    window.location.href = "/";
  }

}
