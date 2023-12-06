import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { CerrarSessionComponent } from './components/cerrar-session/cerrar-session.component';

const routes: Routes = [
    
    { path: 'admin-login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'agregar-producto', component: AgregarProductoComponent },
    { path: 'cerrar-session', component: CerrarSessionComponent },

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }