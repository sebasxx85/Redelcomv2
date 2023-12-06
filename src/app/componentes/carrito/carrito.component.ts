import { Component, Input, OnInit } from '@angular/core';
import { Terminales } from 'src/app/Models/Terminales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent  implements OnInit {

  //recibimos el arreglo de comp terminales (padre)
   @Input() TerminalesR3!: Terminales[]

    //Obtener el input desde componenete padre cabecera quien a su vez obtiene de comp ingrear
   @Input() usuarioHijoCarrito!: string;

  constructor(){}
  
  ngOnInit(): void {
    
  } 

  clicCarrito(){
    
  
  }

}
