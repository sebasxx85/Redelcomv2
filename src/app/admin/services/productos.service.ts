import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  MisProductos: any[] = [
    { id: 1, categoria: 'Categoria 1', producto: 'Producto 1', precio: 24, fecha: '2023-08-01' },
    { id: 2, categoria: 'Categoria 2', producto: 'Producto 2', precio: 38, fecha: '2023-10-01' },
    { id: 3, categoria: 'Categoria 3', producto: 'Producto 3', precio: 50, fecha: '2023-11-01' },
    { id: 4, categoria: 'Categoria 4', producto: 'Producto 4', precio: 28, fecha: '2023-09-01' },
    // Luego se recibiran las compras del usuario x api
  ];

  private productosSubject!: BehaviorSubject<any[]>

  //para sumar el total del carrito actualizado
  private totalSubject!: BehaviorSubject<number>


  constructor() {
    this.productosSubject = new BehaviorSubject<any[]>(this.MisProductos)
    this.totalSubject = new BehaviorSubject<number>(0)
  }

  //sin usar observables mas abajo uso Behavior subject
  mostrarProductos() {
    return this.MisProductos
  }

  //Agregar un producto x boton
  agregarProducto(producto: any) {
    this.MisProductos.push(producto)
  }

  //eliminar producto x id
  eliminarProducto(id: number) {
    const index = this.MisProductos.findIndex(producto =>
      producto.id === id);

    if (index !== -1) {
      this.MisProductos.splice(index, 1);
    }

  }

  //actualizar o editar info de un producto x id
  actualizarProducto(id: number) { }


  //sumar los valores de los productos
  sumarProductos(): number {
    return this.MisProductos.reduce(
      (acc, producto) => acc + producto.precio, 0)
  }


  ///////////////* USO DE OBSERVABLES*//////////////////

  //obtener todos los productos
  obtenerProductos(): Observable<any[]> {
    return this.productosSubject.asObservable()
  }

  //obtener 1 producto por id
  obtenerProducto(id: number): Observable<any[]> {
    return this.obtenerProductos().pipe(
      map((productos: any[]) =>
        productos.filter((producto: any) => producto.id === id))
    )
  }

  //agregar producto
  agregarProductoObs(producto: any): void {
    const currentProducts = this.productosSubject.value; // Obtiene el arreglo actual
    currentProducts.push(producto); // Agrega el nuevo producto directamente
    this.productosSubject.next(currentProducts); //actualizamos la cant de productos
    this.calcularTotal(currentProducts); //calculamos los productos actualizados

  }

  //sumar Productos actualizado usando obs y next
  calcularTotal(MisProductos: any[]): void{
    const total = MisProductos.reduce((sum, product) => sum + product.precio, 0);
    this.totalSubject.next(total);

  }


  //editar producto curso coder NO USAR
  editarProductoObs(producto: any){
    //el p es del arreglo misProductos y el producto es el que recibe como parametro
    let indice = this.MisProductos.findIndex((p: any) => p.id = producto.id )
    if (indice > -1) {
      this.MisProductos[indice] = producto
      this.productosSubject.next(this.MisProductos)
    }
  }


   //editar producto yo
   editarProductoObs2(id: number) {

    const index = this.MisProductos.findIndex(producto =>
      producto.id === id);

    if (index > -1) {
      this.MisProductos[index] = id
      this.productosSubject.next(this.MisProductos)
    }
  }


  eliminarProductoObs(id: number) {

    const index = this.MisProductos.findIndex(producto =>
      producto.id === id);

    if (index > -1) {
      this.MisProductos.splice(index, 1)
      //Con esto calcula el TOTAL productos actualizados
      this.productosSubject.next(this.MisProductos)
      
    }
  }


}
  