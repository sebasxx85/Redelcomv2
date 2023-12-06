import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Terminales } from 'src/app/Models/Terminales';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent  implements OnInit {

fecha: Date = new Date()

//Precio Terminales
terminales: Terminales[] = [
  {
    id: 1,
    nombre: "terminal Basico",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 97500,
    descripcion: 'Descripcion Terminal Basico',
    contador: 0

  },
  {
    id: 2,
    nombre: "terminal 2",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 87500,
    descripcion: 'Descripcion Terminal 2',
    contador: 0

  },
  {
    id: 3,
    nombre: "terminal 3",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 57500,
    descripcion: 'Descripcion Terminal 3',
    contador: 0

  },
  {
    id: 4,
    nombre: "terminal 5",
    image: 'https://redelcomventas.com/img/posLogo.jpg',
    stock: 20,
    precioTerminal: 27500,
    descripcion: 'Descripcion Terminal 5',
    contador: 0

  }
]

Precio!: number;
TOTAL!: number
IVA: number = 0.19;


//agregar router al constructor para usar navigate y redirigir
constructor(private router: Router) {
  this.Precio = this.terminales[3].precioTerminal
}

ngOnInit(): void {

}

//metodos evento click

retornarValorTotal(){
  let precioTerminal = (this.terminales[3].precioTerminal) * (1 + this.IVA)
  return precioTerminal
}

retornarIVA(){
  let precioTerminalIVA = (this.terminales[3].precioTerminal) * (this.IVA)
  return precioTerminalIVA

}

seguirComprando() {
  setTimeout(() => {
    this.router.navigate(['/terminales']);
  }, 1500);

}

 pagar(){

  Swal.fire({
    title: "El valor TOTAL a pagar es de: $" + this.retornarValorTotal(),
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    timer: 2000 
  })

    setTimeout(() => {
      this.router.navigate(['/procesar-pago']);
    }, 3500);
 }

}
