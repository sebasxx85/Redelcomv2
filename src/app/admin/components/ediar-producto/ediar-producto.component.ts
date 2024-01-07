import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-ediar-producto',
  templateUrl: './ediar-producto.component.html',
  styleUrls: ['./ediar-producto.component.css']
})
export class EdiarProductoComponent {

  editarProducto!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private prodServices: ProductosService
  ) {
    this.editarProducto = this.formBuilder.group({
      id: ['', Validators.required],
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      fecha: ['', Validators.required],
    })
  }

  editar(){}

}
