import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlankComponent } from './shared/blank/blank.component';
import { ListausuarioComponent } from './usuario/listausuario/listausuario.component';
import { ListaTestimonioComponent } from './testimonio/lista-testimonio/lista-testimonio.component';
import { ListaRestauranteComponent } from './restaurante/lista-restaurante/lista-restaurante.component';
import { ListahabitacionComponent } from './habitacion/listahabitacion/listahabitacion.component';
import { ListadetallereservaComponent } from './detallereserva/listadetallereserva/listadetallereserva.component';
import { ListaclienteComponent } from './cliente/listacliente/listacliente.component';
import { NuevousuarioComponent } from './usuario/nuevousuario/nuevousuario.component';
import { NuevotestimonioComponent } from './testimonio/nuevotestimonio/nuevotestimonio.component';
import { NuevohabitacionComponent } from './habitacion/nuevohabitacion/nuevohabitacion.component';
import { NuevodetallereservaComponent } from './detallereserva/nuevodetallereserva/nuevodetallereserva.component';
import { NuevoclienteComponent } from './cliente/nuevocliente/nuevocliente.component';
import { NuevorestauranteComponent } from './restaurante/nuevorestaurante/nuevorestaurante.component';
import { UsuarioeditarComponent } from './usuario/usuarioeditar/usuarioeditar.component';
import { EditardetallereservaComponent } from './detallereserva/editardetallereserva/editardetallereserva.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: ListausuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario/nuevousuario',
    component: NuevousuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario/usuarioeditar',
    component: UsuarioeditarComponent,
    pathMatch: 'full'
  },
  {
    path: 'testimonio',
    component: ListaTestimonioComponent,
    pathMatch: 'full'
  },
  {
    path: 'testimonio/nuevotestimonio',
    component: NuevotestimonioComponent,
    pathMatch: 'full'
  },
  {
    path: 'restaurante',
    component: ListaRestauranteComponent,
    pathMatch: 'full'
  },
  {
    path: 'restaurante/nuevorestaurante',
    component: NuevorestauranteComponent,
    pathMatch: 'full'
  },
  {
    path: 'habitacion',
    component: ListahabitacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'habitacion/nuevohabitacion',
    component: NuevohabitacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'detallereserva',
    component: ListadetallereservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'detallereserva/nuevodetallereserva',
    component: NuevodetallereservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'detallereserva/editardetallereserva',
    component: EditardetallereservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ListaclienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/nuevocliente',
    component: NuevoclienteComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
