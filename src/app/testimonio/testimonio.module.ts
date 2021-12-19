import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTestimonioComponent } from './lista-testimonio/lista-testimonio.component';
import { NuevotestimonioComponent } from './nuevotestimonio/nuevotestimonio.component';
import { EditartestimonioComponent } from './editartestimonio/editartestimonio.component';




@NgModule({
  declarations: [
    ListaTestimonioComponent,
    NuevotestimonioComponent,
    EditartestimonioComponent,


  ],
  imports: [
    CommonModule
  ]
})
export class TestimonioModule { }
