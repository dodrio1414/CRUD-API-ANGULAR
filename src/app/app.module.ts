import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpClientModule } from '@angular/common/http';
import { TestimonioModule } from './testimonio/testimonio.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { DetallereservaModule } from './detallereserva/detallereserva.module';
import { ClienteModule } from './cliente/cliente.module';
import { FormsModule } from '@angular/forms';
import { NuevodetallereservaComponent } from './detallereserva/nuevodetallereserva/nuevodetallereserva.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuarioModule,
    TestimonioModule,
    RestauranteModule,
    HabitacionModule,
    DetallereservaModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
