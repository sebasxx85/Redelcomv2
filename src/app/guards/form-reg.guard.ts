import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class FormRegGuard implements CanActivateChild {

  constructor(
    private loginService: LoginService
  ) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    // //Aca vamos a impedir que salga del form registro no funciona xq el servicio no es asincronico
    // if (this.loginService.isLoggged()) {
    //   return true

    // } 
    //   return confirm('You have unsaved changes')

    if (this.isLoggin()) {
      return true

    }
    
    return confirm('You have unsaved changes')

  }

  isLoggin(): boolean {
    return false
  }

}
