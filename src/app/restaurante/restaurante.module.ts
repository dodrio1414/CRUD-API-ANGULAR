import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRestauranteComponent } from './lista-restaurante/lista-restaurante.component';
import { NuevorestauranteComponent } from './nuevorestaurante/nuevorestaurante.component';
import { EditarrestauranteComponent } from './editarrestaurante/editarrestaurante.component';



@NgModule({
  declarations: [
    ListaRestauranteComponent,
    NuevorestauranteComponent,
    EditarrestauranteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RestauranteModule { }
