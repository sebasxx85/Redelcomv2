import { Component } from '@angular/core';
import { LoginUsuarioService } from '../../services/login-usuario.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {

  constructor(
    private loginServ: LoginUsuarioService
  ){

   }

}
