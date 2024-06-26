import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Terminales } from 'src/app/Models/Terminales';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{
  
   //trabajando como componente hijo, recibir info del comp ingresar

  //Obtener el input desde componenete padre ingresar
  @Input() usuarioHijo!: string;

  //Obtener la funcion saludar desde comp padre
  @Input() funcionSaludar!: (args: string) => string;

  //creando un evento output desde hijo al padre
  @Output() eventoSalida:  EventEmitter<string> = new EventEmitter<string>()

  
  constructor(){}

  ngOnInit(): void {
    //mensaje evento salida
    this.eventoSalida.emit('Este mensaje es enviado desde hijo')
   
  }

 saludarIngreso(){
  alert(this.funcionSaludar);
 }

}
