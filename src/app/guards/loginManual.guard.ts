import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"


export class loginManual implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        if (localStorage.getItem('token')) {

            return true

        } else {
            this.router.navigate(['ingresar']);
            return false
        }
    }

}