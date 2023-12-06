import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  usuarioPadre: string =  "" //variable para enviar compon cabecera
  passwordPadre: string = "" //solo uso en este componente

  //Este mensaje va en la funcion que toma el evento desde el hijo
  mensajeSalida: string = '';

  //trabajando como componente padre mandar info del usuario al comp cabecera
  constructor(){}
  
  ngOnInit(): void {
    
  } 

  //funcion saludar para enviar a Hijo
  funcionSaludarPadre() {
    return "Bienvenido" + this.usuarioPadre
  }

  manejoIngresar(){
    if (this.usuarioPadre != "" && this.passwordPadre != "" ) {
      Swal.fire({
        icon: 'success',
        title: 'Genial!...',
        text: 'Has ingresado correctamente',
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ups!...',
        text: 'Algo ha salido mal',
      })
    }
    //colocar redirecion portal
    
  }

  //este el evento que maneja el ouput desde hijo al padre
  //el evento es el mensaje desde el hijo en este caso
  manejarEventoSalida(mensaje: string){
    this.mensajeSalida = mensaje

  }

}
