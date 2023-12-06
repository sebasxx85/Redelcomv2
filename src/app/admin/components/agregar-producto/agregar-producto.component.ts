import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  agregarProducto!: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder
    )
    {
      this.agregarProducto = this.formBuilder.group({
        id: ['', Validators.required, Validators.maxLength(3)],
        producto: ['', Validators.required],
        categoria: ['', Validators.required]
      })
    }

  agregar(){
    //enviar al arreglo de productos

  }

}
