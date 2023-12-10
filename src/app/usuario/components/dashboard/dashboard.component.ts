import { Component, OnInit } from '@angular/core';
import { MisComprasService } from '../../services/mis-compras.service';
import { Observable } from 'rxjs';
import { MisComprasBehaviorService } from '../../services/mis-compras-behavior.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  UserLogin: boolean = false;
  color: string = 'rojo';

  MisCompras!: any[]

  //Usando observable manera 1
  MisComprasObs1!: any[]



  //Usando Behavior
  MisComprasBehavior!: any[]

  //arreglo eliminado
  MisEliminadosBehavior!: any[]

  constructor(
    private comprasServ: MisComprasService,
    private comprasServBehavior: MisComprasBehaviorService
  ) { }


  ngOnInit(): void {
    //sin observables
    this.MisCompras = this.comprasServ.mostrarCompras()

    //Usando observable manera 1
    this.obtenerProductos()

    //usando Behavior Compras
    this.comprasServBehavior.Compras.subscribe((compras) => {
      this.MisComprasBehavior = compras
    })

    //guardar los eliminados
    this.comprasServBehavior.Eliminado.subscribe((compras) => {
      this.MisEliminadosBehavior = compras
    })
  }

  //Usando observable manera 1 con of
  obtenerProductos() {
    this.comprasServ.mostrarComprasObs().subscribe({
      next: (productos) => {
        this.MisComprasObs1 = productos;
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    })

  }

  //Eliminar Compra
  eliminarCompra(productid: number) {
    this.comprasServBehavior.deleteProduct(productid)  
  }

}
