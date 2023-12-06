import { Component } from '@angular/core';
import { map } from 'rxjs';
import { TerminalesObsService } from 'src/app/services/terminales-obs.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  MyTotal: number = 0;

  constructor(
    //Servicio con Observables
    private terminalesObsService: TerminalesObsService,
  ){}

  ngOnInit(){
    //implementamos el pipe que nos permite trabajar ele de la subsripcion
    this.terminalesObsService.terminal
    //usamos map para crear un nuevo array modificado
    .pipe(map(terminal => {
      //usamos reduce par sumar el precio de los valores de los terminales
      return terminal.reduce((acc, curr) => acc + curr.precioTerminal, 0)
    }))
    .subscribe(valor => {
      this.MyTotal = valor
      
    })
  }

}
