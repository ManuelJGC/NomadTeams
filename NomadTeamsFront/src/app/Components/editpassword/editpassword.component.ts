import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css']
})
export class EditpasswordComponent implements OnInit {

  constructor(private _userService: UserService) { }

  public id = JSON.parse(localStorage.getItem('usuario')!).id;
  public msg=false;
  public err=false;
  public mensaje:any='';
  
  ngOnInit(): void {

  }

  public editar(form:any){
    this._userService.editar_password(form,this.id).subscribe(
      data =>{
        console.log(data);
        this.msg = true;
      },
      error =>{
        this.err= true;
        console.log(error.error.message);
        this.mensaje = error.error.message;
      }
    )
  }

}
