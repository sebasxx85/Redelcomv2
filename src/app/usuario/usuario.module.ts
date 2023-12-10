import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterUsuarioComponent } from './components/footer-usuario/footer-usuario.component';
import { NavUsuarioComponent } from './components/nav-usuario/nav-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CerrarSessionComponent } from './components/cerrar-session/cerrar-session.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { UsuarionRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterUsuarioComponent,
    NavUsuarioComponent,
    LoginComponent,
    CerrarSessionComponent,
    CarritoComprasComponent,
    MisComprasComponent,
    CrearCuentaComponent
  ],
  imports: [
    CommonModule,
    UsuarionRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  exports: [
    DashboardComponent,
    FooterUsuarioComponent,
    NavUsuarioComponent,
    LoginComponent,
    CerrarSessionComponent,
    CarritoComprasComponent,
    MisComprasComponent,
    CrearCuentaComponent,
    HttpClientModule
  ]
})
export class UsuarioModule { }
