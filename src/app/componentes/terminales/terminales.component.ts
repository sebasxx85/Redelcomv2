import { Component, EventEmitter, OnInit, Output, Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Terminales } from 'src/app/Models/Terminales';
import { configuration, token } from 'src/app/config';
import { terminalesR3Data, terminalesMiniData } from 'src/app/data/terminalesData';
import { TerminalesObsService } from 'src/app/services/terminales-obs.service';
import { TerminalesService } from 'src/app/services/terminales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent implements OnInit {

  //contadorR3: number = 0;
  //contadorMini: number = 0;

  //Estos terminales vienen del data ya no los ocuparemos de alli
  //terminalesR3 = terminalesR3Data
  //terminalesMini = terminalesMiniData

  //Estas variables se usan para trabajar con los terminales del service
  terminalesR3!: Terminales[]
  terminalesMini!: Terminales[]

  //Creamos una nueva variable para usar el token de servicios
  terminalesComponent!: Terminales[]

  //agregar router al constructor para usar navigate y redirigir
  constructor(
    private router: Router,

    //creando las variables para usar el servicio
    private terminalesR3Service: TerminalesService,
    private terminalesMiniService: TerminalesService,

    //Servicio con Observables
    private terminalesObsService: TerminalesObsService,

    //usando el token de servicios
    @Inject(token) private config: configuration

  ) { }

  ngOnInit(): void {
    this.terminalesR3 = this.terminalesR3Service.obtenerTerminalesR3();
    this.terminalesMini = this.terminalesMiniService.obtenerTerminalesMini();

    //usando el token de servicio para obtener la funcion
    this.terminalesComponent = this.config.servicios.terminales.obtenerTerminalesR3()
  }

  //Mas adelante agregar terminal desde adm modulo dashborad
  agregarTerminalComp() {
    let terminal: Terminales = {
      id: 11,
      nombre: "nuevo Terminal",
      image: "",
      stock: 22,
      precioTerminal: 97.000,
      descripcion: "nuevo terminal que se agrega",
      contador: 0
    }

    //llamamos a la funcion agregar terminal en nuestro servicio
    this.terminalesR3Service.agregarTerminal(terminal)
  }

  //Contadores
  addR3(id: number) {
    let product = this.terminalesR3.find(p => p.id === id);

    if (product) {
      if (product.contador < product.stock) {
        product.contador++
      }
    }
  }

  disR3(id: number) {
    let product = this.terminalesR3.find(p => p.id === id);
 
    if (product) {
      if (product.contador > 0) {
        product.contador--
      }
    }
  }

  addMini(id: number) {
    let product = this.terminalesMini.find(p => p.id === id);

    if (product) {
      if (product.contador < product.stock) {
        product.contador++
      }
    }
  }

  disMini(id: number) {
    const product = this.terminalesMini.find(p => p.id === id);
  
    if (product) {
      if (product.contador > 0) {
        product.contador--
      }
    }
  }

  eventoComprar(terminal: Terminales) {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha agregado el Producto al carrito',
      showConfirmButton: false,
      timer: 1500
    })

    //trabajamos con el servicio terminales observable
    this.terminalesObsService.addNewTerminal(terminal)

    //redirecionamos a comprar
    /*
    setTimeout(() => {
      this.router.navigate(['/comprar']);
    }, 2000);
    */

  }


}
