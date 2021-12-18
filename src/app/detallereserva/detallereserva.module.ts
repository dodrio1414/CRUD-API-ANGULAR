import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadetallereservaComponent } from './listadetallereserva/listadetallereserva.component';
import { NuevodetallereservaComponent } from './nuevodetallereserva/nuevodetallereserva.component';
import { EditardetallereservaComponent } from './editardetallereserva/editardetallereserva.component';



@NgModule({
  declarations: [
    ListadetallereservaComponent,
    NuevodetallereservaComponent,
    EditardetallereservaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetallereservaModule { }
