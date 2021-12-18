import { Component, OnInit } from '@angular/core';
import { DetalleReserva } from 'src/app/Interfaces/detalleReserva.interface';
import { DetallereservaService } from '../detallereserva.service';

@Component({
  selector: 'app-editardetallereserva',
  templateUrl: './editardetallereserva.component.html',
  styleUrls: ['./editardetallereserva.component.css']
})
export class EditardetallereservaComponent implements OnInit {

  constructor(private detalleService: DetallereservaService) { }

  ngOnInit(): void {

  }

  editarDetalle(inputPrecio: number,inputAdelanto: number,inputDias: number, inputIngreso: Date | null,inputSalida: Date | null){
    const nuevoDetalle: DetalleReserva = {
      id: 0,
      ingreso: inputIngreso,
      salida: inputSalida,
      precio: inputPrecio,
      adelanto: inputAdelanto,
      dias: inputDias
    };
    this.detalleService.editarDetalle(3,nuevoDetalle);
  }

}
