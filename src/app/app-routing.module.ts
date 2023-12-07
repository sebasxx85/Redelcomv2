import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalesComponent } from './componentes/terminales/terminales.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoFormularioComponent } from './componentes/contacto-formulario/contacto-formulario.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { ComprarComponent } from './componentes/comprar/comprar.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ProcesarPagoComponent } from './componentes/procesar-pago/procesar-pago.component';
import { loginManual } from './guards/loginManual.guard';
import { LoginGuard } from './guards/login.guard';
import { FormRegGuard } from './guards/form-reg.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'terminales', component: TerminalesComponent},
  { path: 'comprar', component: ComprarComponent},
  { path: 'carrito', component: CarritoComponent},

  //Aplicamos guards para esta ruta
  { path: 'promociones', 
    component: PromocionesComponent,
    canActivate: [LoginGuard]
  },

  { path: 'contacto', component: ContactoFormularioComponent},
  { path: 'ingresar', component: IngresarComponent},

  { path: 'crear-cuenta', 
    component: CrearCuentaComponent,
    canDeactivate: [FormRegGuard]
  },

  { path: 'recuperar-password', component: RecuperarPasswordComponent},
  { path: 'procesar-pago', component: ProcesarPagoComponent},
  
  //Rutas modulos hijos
  { path: 'admin', loadChildren: () => 
  import('./admin/admin.module').then(m => m.AdminModule) },

  //Esta ruta debe ir al ultimo
  { path: '**', redirectTo: '/home' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

//debo exportarla para agregarla al app.module
export class AppRoutingModule {}