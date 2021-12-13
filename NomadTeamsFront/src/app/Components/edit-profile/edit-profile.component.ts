import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private _userService:UserService) { }
  public usuario:any={};
  public user:any={};

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('usuario')!);
    this.obtener_datos(this.user.id);
  }

  

  public editar(form:any){
    this._userService.editar_datos(form,this.user.id).subscribe(
      data =>{
        console.log(data);
        localStorage.removeItem('usuario');
        window.location.href = "/";
      }
    )
  }

  public obtener_datos(id:any){
    this._userService.obtener_datos(id).subscribe(
      data =>{
        console.log(data);
        this.usuario = data;
      }
    )
  }

}
