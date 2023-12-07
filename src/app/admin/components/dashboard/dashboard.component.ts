import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { TerminalesService } from 'src/app/services/terminales.service';
import { Terminales } from 'src/app/Models/Terminales';
import { LoginService } from '../../services/login.service';
import { User } from '../../Models/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  UserLogin: boolean = false;
  userData?: User
  color: string = 'rojo';

  tusDatos!: any[]
  TerminalesMini!: Terminales []

  constructor(
    private router: Router, 
    private servProductos: ProductosService,
    private serTerminales: TerminalesService,
    private loginService: LoginService,
    private prodService: ProductosService,
  ) { }

  ngOnDestroy(){
    //nos desuscribimos de los observables para evitar problemas de pérdida de memoria 
    //no me reconoce el unsubscribe()
    
    //this.loginService.MiuserData.unsubscribe()
  }

  ngOnInit(): void {
    this.tusDatos = this.servProductos.mostrarProductos()
    this.TerminalesMini = this.serTerminales.obtenerTerminalesR3()
  }

  crearProd() {
    setTimeout(() => {
      this.router.navigateByUrl('admin/agregar-producto');
    }, 3000);
  }

  ngOninit(){
    //nos subscribimos al asObservable del servicio
    this.loginService.MiUserLoginOn.subscribe(
      {
        //igualamos nuestro UserLogin con el que viene del observable 
        //que tenia x defecto el valor inicial de falso
        next: (UserLogin) =>{
          this.UserLogin = UserLogin;
        }
      });
     
       //nos subscribimos al otro asObservable del servicio
      this.loginService.MiuserData.subscribe({
        next: (userData) =>{
          this.userData = userData;
        }
      });

  }

  //Eliminar producto
  eliminarProducto(id: number) {
    this.prodService.eliminarProducto(id);
  }


}
