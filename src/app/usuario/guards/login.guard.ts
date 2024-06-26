import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUsuarioService } from '../services/login-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(
    private router: Router,
    private loginService: LoginUsuarioService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //usamos la funcion del servicio login
    if (this.loginService.isLoggged()) {
      return true

    } else {
      setTimeout(() => {
      this.router.navigateByUrl('ingresar');
      }, 2000)
      return false
    }

  }

}
