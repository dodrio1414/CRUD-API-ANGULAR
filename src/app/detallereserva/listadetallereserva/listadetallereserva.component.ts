import { Component, OnInit } from '@angular/core';
import { DetallereservaService } from '../detallereserva.service';

@Component({
  selector: 'app-listadetallereserva',
  templateUrl: './listadetallereserva.component.html',
  styleUrls: ['./listadetallereserva.component.css']
})
export class ListadetallereservaComponent implements OnInit {

  constructor(private detallereservaService: DetallereservaService) {
    this.detallereservaService.listarDetalle();
   }

  ngOnInit(): void {
  }

  get listaDetalle(){
    
    return this.detallereservaService.lista;
  }

  eliminarDetalle(id: number){
    this.detallereservaService.eliminarDetalle(id);
  }
 
}
