import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* Este login service debe recibir los usuarios desde localhost comparar con lo que
     se envia x fromulario y si esta registrado dejar entrar y mostrar botones de dashboard 
     sacar ingresar y demas caracteristicaa */

  constructor() { }

  isLoggged(): boolean {
    return localStorage.getItem('token')? true: false;
  }
}
