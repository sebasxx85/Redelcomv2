import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisComprasBehaviorService {

  MisCompras: any[] = [
    { id: 1, categoria: 'Categoria 1', producto: 'Producto 1', fecha: '2023-08-01' },
    { id: 2, categoria: 'Categoria 2', producto: 'Producto 2', fecha: '2023-10-01' },
    { id: 3, categoria: 'Categoria 3', producto: 'Producto 3', fecha: '2023-11-01' },
    { id: 4, categoria: 'Categoria 4', producto: 'Producto 4', fecha: '2023-09-01' },
    // Luego se recibiran las compras del usuario x api
  ];

 //Los que se vallan eliminando arriba con el boton eliminar que se guarden en este arreglo como un carrito de compras 
  Eliminados: any[] = [];

  comprasSubject! : BehaviorSubject<any[]>
  eliminadosSubject! : BehaviorSubject<any[]>

  constructor() { 
    //le mandamos como valor inicial el arreglo de miscompras
    this.comprasSubject = new BehaviorSubject<any[]>(this.MisCompras)

    //Behavior para eliminados
    //le mandamos como valor inicial el arreglo de miscompras
    this.eliminadosSubject = new BehaviorSubject<any[]>(this.Eliminados)

  }

  //obteniendo las compras usando Behavior como un observable
  //y los componentes se puedan subscribir a el
  get Compras(): Observable<any[]>{
      return this.comprasSubject.asObservable()
  }

  get Eliminado(): Observable<any[]> {
    return this.eliminadosSubject.asObservable()
  }


  deleteProduct(productId: number) {
    const updatedProducts = this.MisCompras.filter((product) => product.id !== productId);
    this.comprasSubject.next(updatedProducts);

    const deletedProduct = this.MisCompras.find((product) => product.id === productId);
    const updatedDeletedProducts = [...this.eliminadosSubject.value, deletedProduct];
    this.eliminadosSubject.next(updatedDeletedProducts);
  }

}
