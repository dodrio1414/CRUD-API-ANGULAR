import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListahabitacionComponent } from './listahabitacion/listahabitacion.component';
import { NuevohabitacionComponent } from './nuevohabitacion/nuevohabitacion.component';
import { EditarhabitacionComponent } from './editarhabitacion/editarhabitacion.component';



@NgModule({
  declarations: [
    ListahabitacionComponent,
    NuevohabitacionComponent,
    EditarhabitacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HabitacionModule { }
