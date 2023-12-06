import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})

export class CrearCuentaComponent implements OnInit {
  formularioContacto2!: FormGroup
  comprobarPassword!: any
  
  constructor(
    private router: Router,
    private fb: FormBuilder
  ){}
 
  ngOnInit(): void {} 

  enviarFormulario(){

    //comprobando que ambas contrasenas sean iguales
    const contrasena1 = this.formularioContacto2.value.password
    const contrasena2 = this.formularioContacto2.value.password2
    this.comprobarPassword = contrasena1 === contrasena2

    Swal.fire(
      'Buen Trabajo!',
      'Se ha enviado el formulario correctamente',
      'success'
    )

    setTimeout(() => {
      this.router.navigate(['/ingresar']);
    }, 2000);
    
    
  }

}
