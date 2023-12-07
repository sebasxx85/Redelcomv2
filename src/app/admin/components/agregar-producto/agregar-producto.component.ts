import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  agregarProducto!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private prodServices: ProductosService
  ) {
    this.agregarProducto = this.formBuilder.group({
      id: ['', Validators.required],
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      fecha: ['', Validators.required],
    })
  }

  agregar() {
    //enviar al arreglo de productos usando push y enviando los valores del formulario
    if (this.agregarProducto.valid) {
      const producto = this.agregarProducto.value;
      //console.log(producto);
      this.prodServices.agregarProducto(producto)
      this.router.navigate(['/admin/dashboard'])

    }

  }

}