import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  //agregar router al constructor para usar navigate y redirigir
  constructor(private router: Router){

  }

  ngOnInit(): void {
 
  }


  BotonComprar(){

     //usar un nav para renviar al formulario
     setTimeout(() => {
      this.router.navigate(['/terminales']);
    }, 2000);
  }

  BotonConsultar(){
    Swal.fire({title: 'Envianos un formulario de Contacto', timer: 1900 })

    //usar un nav para renviar al formulario
    setTimeout(() => {
      this.router.navigate(['/contacto']);
    }, 2000);
  }

}
