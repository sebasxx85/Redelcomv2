import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-usuario',
  templateUrl: './nav-usuario.component.html',
  styleUrls: ['./nav-usuario.component.css']
})
export class NavUsuarioComponent {
  UserLogin: boolean = false;
  CondicionColor: boolean = true;

}
