import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerminalesComponent } from './componentes/terminales/terminales.component';
import { AppRoutingModule } from './app-routing.module';
import { ComprarComponent } from './componentes/comprar/comprar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoFormularioComponent } from './componentes/contacto-formulario/contacto-formulario.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { PaginacionComponent } from './componentes/paginacion/paginacion.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './componentes/recuperar-password/recuperar-password.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcesarPagoComponent } from './componentes/procesar-pago/procesar-pago.component';
import { TerminalesService } from './services/terminales.service';
import { token, config } from './config';
import { CartObservableComponent } from './componentes/cart-observable/cart-observable.component';
import { TotalComponent } from './componentes/total/total.component';
//Agregando html para consumir api node
import { HttpClientModule } from '@angular/common/http';
import { ApiNodeComponent } from './componentes/api-node/api-node.component';
import { CardsComponent } from './articles/components/cards/cards.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    FooterComponent,
    ContenidoComponent,
    InicioComponent,
    TerminalesComponent,
    ComprarComponent,
    HomeComponent,
    ContactoFormularioComponent,
    IngresarComponent,
    PaginacionComponent,
    CarritoComponent,
    CrearCuentaComponent,
    RecuperarPasswordComponent,
    PromocionesComponent,
    ProcesarPagoComponent,
    CartObservableComponent,
    TotalComponent,
    ApiNodeComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    
  ],
  providers: [
   // {provide: TerminalesService, useClass: TerminalesService},
    {provide: token, useValue: config}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { 






  
}
