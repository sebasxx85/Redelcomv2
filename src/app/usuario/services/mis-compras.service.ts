import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisComprasService {

  MisCompras: any[] = [
    { id: 1, categoria: 'Categoria 1', producto: 'Producto 1', fecha: '2023-08-01' },
    { id: 2, categoria: 'Categoria 2', producto: 'Producto 2', fecha: '2023-10-01' },
    { id: 3, categoria: 'Categoria 3', producto: 'Producto 3', fecha: '2023-11-01' },
    { id: 4, categoria: 'Categoria 4', producto: 'Producto 4', fecha: '2023-09-01' },
    // Luego se recibiran las compras del usuario x api
  ];

  elementoPush = { id: 4, categoria: 'Categoria 4', producto: 'Producto 4', fecha: '2023-09-01' }

  mostrarCompras() {
    return this.MisCompras
  }

  //Eliminar compra desde boton
  eliminarCompras(id: number) {
    const index = this.MisCompras.findIndex(producto =>
      producto.id === id);

    if (index !== -1) {
      this.MisCompras.splice(index, 1);
    }
  }

  /* USO DE OBSERVABLES */

  //Usando observable manera 1
  mostrarComprasObs() {
    return of(this.MisCompras)
  }

 
}
