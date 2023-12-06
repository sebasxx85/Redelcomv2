import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})

export class NavAdminComponent {
  UserLogin: boolean = false;
  CondicionColor: boolean = true;

  //usaremos los observables para ver si un usario esta logueado o no y mostrar 
  //ingresar o cerrar session
  constructor(private loginService: LoginService){}

  ngOninit(){
    //nos subscribimos al asObservable del servicio
    this.loginService.MiUserLoginOn.subscribe(
      {
        //igualamos nuestro UserLogin con el que viene del observable 
        //que tenia x defecto el valor inicial de falso
        next: (UserLogin) =>{
          this.UserLogin = UserLogin;
        }
      }
    )
  }

}
