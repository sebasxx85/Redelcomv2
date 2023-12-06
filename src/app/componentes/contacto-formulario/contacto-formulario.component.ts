import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto-formulario',
  templateUrl: './contacto-formulario.component.html',
  styleUrls: ['./contacto-formulario.component.css']
})
export class ContactoFormularioComponent implements OnInit {
  formularioContacto!: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder
  ){
    
    this.formularioContacto = fb.group({

      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [Validators.minLength(5),Validators.required, 
      Validators.pattern('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/')]),
      comentario: new FormControl('',[Validators.minLength(50),Validators.required]),
      radio: new FormControl(false,[Validators.required]),

    })
  }

  ngOnInit(): void {
    
  } 

  enviarFormulario(){
   
    Swal.fire(
      'Buen Trabajo!',
      'Se ha enviado el formulario correctamente',
      'success'
    )

   //reinciar formulario
   
  }
}
