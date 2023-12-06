import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-session',
  templateUrl: './cerrar-session.component.html',
  styleUrls: ['./cerrar-session.component.css']
})
export class CerrarSessionComponent {

  constructor(private router: Router){}

  ngOnInit() {
    // Redirige a inicio automaticamente
    setTimeout(() => {
      this.router.navigate(['']);
    }, 4000);
  }


}
