import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { AgregarTerminalComponent } from './components/agregar-terminal/agregar-terminal.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { CerrarSessionComponent } from './components/cerrar-session/cerrar-session.component';
import { DashboardObsComponent } from './components/dashboard-obs/dashboard-obs.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AgregarProductoComponent,
    AgregarTerminalComponent,
    FooterAdminComponent,
    NavAdminComponent,
    CerrarSessionComponent,
    DashboardObsComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [ 
    LoginComponent,
    DashboardComponent,
    AgregarProductoComponent,
    FooterAdminComponent,
    NavAdminComponent,
    CerrarSessionComponent,
    DashboardObsComponent,
  ],  
})

export class AdminModule { }
