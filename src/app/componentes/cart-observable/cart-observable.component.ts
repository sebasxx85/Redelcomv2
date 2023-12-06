import { Component } from '@angular/core';
import { Terminales } from 'src/app/Models/Terminales';
import { TerminalesObsService } from 'src/app/services/terminales-obs.service';

@Component({
  selector: 'app-cart-observable',
  templateUrl: './cart-observable.component.html',
  styleUrls: ['./cart-observable.component.css']
})
export class CartObservableComponent {

  terminals: Terminales[] = []

  constructor(
    //Servicio con Observables
    private terminalesObsService: TerminalesObsService,
  ){}

  //Usamos el tObsService en el OnInit y nos subscribimos al observable terminal
  ngOnInit(){
  this.terminalesObsService.terminal.subscribe(terminals => {
    this.terminals = terminals
    
  })
}
   //crear boton borrar
   onDeleteTerminal(index: number){
    //usamos el metodo del service para borrar
    this.terminalesObsService.deleteTerminal(index)

   }

}
