import { Injectable } from '@angular/core';
import { Terminales } from '../Models/Terminales';

@Injectable({
  providedIn: 'root'
})
export class TerminalesService {

     private terminalesR3Service: Terminales[] = [
    {
      id: 1,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 47,
      precioTerminal: 99000,
      descripcion: 'Descripcion Terminal R3',
      contador: 0

    },
    {
      id: 2,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 15,
      precioTerminal: 87000,
      descripcion: 'Descripcion Terminal R3',
      contador: 0

    },
    {
      id: 3,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 25,
      precioTerminal: 97000,
      descripcion: 'Descripcion Terminal R3',
      contador: 0

    },
    {
      id: 4,
      nombre: "Terminal R3",
      image: 'https://redelcomventas.com/img/posLogo.jpg',
      stock: 5,
      precioTerminal: 99500,
      descripcion: 'Descripcion Terminal R3',
      contador: 0

    }
  ]

     private terminalesMiniService: Terminales[] = [
    {
      id: 1,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 27,
      precioTerminal: 19500,
      descripcion: 'Descripcion Terminal Mini',
      contador: 0

    },
    {
      id: 2,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 3,
      precioTerminal: 17000,
      descripcion: 'Descripcion Terminal Mini',
      contador: 0

    },
    {
      id: 3,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 19,
      precioTerminal: 17500,
      descripcion: 'Descripcion Terminal Mini',
      contador: 0

    },
    {
      id: 4,
      nombre: "Terminal Mini",
      image: 'https://redelcomventas.com/img/MiniPOS.JPG',
      stock: 4,
      precioTerminal: 18000,
      descripcion: 'Descripcion Terminal Mini',
      contador: 0

    }
  ]

  constructor() { }

  //Usar funciones get
  obtenerTerminalesR3(): Terminales[]{
    return this.terminalesMiniService
  }

  obtenerTerminalesMini(): Terminales[]{
    return this.terminalesR3Service
89
  }

  //FuncionAgregarTerminal
  agregarTerminal(terminal: Terminales){
    this.terminalesR3Service.push(terminal)
  }





}
