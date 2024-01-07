import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from '../../services/productos.service';
import { User } from '../../Models/user';
import { LoginUsuarioService } from 'src/app/usuario/services/login-usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-obs',
  templateUrl: './dashboard-obs.component.html',
  styleUrls: ['./dashboard-obs.component.css']
})
export class DashboardObsComponent implements OnInit {
  UserLogin: boolean = false;
  userData?: User
  color: string = 'rojo';

  //lista de usuarios registrados
  Usuarios!: any[]

  //Usando las funciones con observables
  productos$!: Observable<any[]>
  Total: number = 0;

  constructor(
    private productosService: ProductosService,
    private loginUsuarioServ: LoginUsuarioService,
    private router: Router,

  ) {
    //this.Total = this.productosService.calcularTotal()
  }

  ngOnInit(): void {
    this.productos$ = this.productosService.obtenerProductos()

    //obtener suarios registrados
    this.loginUsuarioServ.usuarios.subscribe((usuarios) => {
      this.Usuarios = usuarios
    })

    //obtenienedo el total actualizado de productos
    this.productos$.subscribe(products => {
      this.calcularTotal(products);
    });
  }

  crearProd() {
    setTimeout(() => {
      this.router.navigateByUrl('admin/agregar-producto');
    }, 2000);
  }

  //Boton Eliminar producto Observable
  eliminarProducto(id: number) {
    this.productosService.eliminarProductoObs(id);
    //debo actualizar el calcularTotal luego de eliminar un producto  
    //this.calcularTotal()
  }

  //Boton Editar producto Observable
  editarProducto(id: number) {
    setTimeout(() => {
      this.router.navigateByUrl('admin/editar-producto');
    }, 2000);
  }


  //sumar productos actualizado
  calcularTotal(products: any[]): void {
    this.Total = products
      .map(product => parseFloat(product.precio))  // Obtén un arreglo de precios
      .reduce((sum, price) => sum + price, 0);  // Suma los precios
  }

  /*recordar que se le puede pasar parametros al navigator como el id y con eso 
      puedo enviarlo al detalle de un producto por ejemplo*/


}
