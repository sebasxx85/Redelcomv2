import { Injectable } from '@angular/core';
import { Terminales } from '../Models/Terminales';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerminalesObsService {

  private cartTerminals: Terminales[] = [];

  private _terminals: BehaviorSubject<Terminales[]> =
    new BehaviorSubject<Terminales[]>([])

  constructor() { }

  //funcion para ingresar un terminal al carrito de compra
  addNewTerminal(terminal: Terminales) {
    //agregamos un terminal al arrays terminal
    this.cartTerminals.push(terminal)
    //con el next damos aviso de que hay cambio en el arrays
    this._terminals.next(this.cartTerminals);
  }
  //este metodo devuelve el BSubject pero como un observable
  get terminal() {
    return this._terminals.asObservable()
  }

  //funcion para eliminar terminal del carrito de compra
  deleteTerminal(index: number) {
    this.cartTerminals.splice(index, 1)
    //con el next damos aviso de que hay cambio en el arrays
    this._terminals.next(this.cartTerminals);
  }

}
