import { Component, OnInit } from '@angular/core';
import { DetalleReserva } from 'src/app/Interfaces/detalleReserva.interface';
import { DetallereservaService } from '../detallereserva.service';



@Component({
  selector: 'app-nuevodetallereserva',
  templateUrl: './nuevodetallereserva.component.html',
  styleUrls: ['./nuevodetallereserva.component.css']
})
export class NuevodetallereservaComponent implements OnInit {

  today: Date;

  constructor(private detalleService: DetallereservaService) { 
    this.today = new Date();
  }

  ngOnInit(): void {
  }

  crearDetalle(inputPrecio: number,inputAdelanto: number,inputDias: number, inputIngreso: Date | null,inputSalida: Date | null){
    const nuevoDetalle: DetalleReserva = {
      id: 0,
      ingreso: inputIngreso,
      salida: inputSalida,
      precio: inputPrecio,
      adelanto: inputAdelanto,
      dias: inputDias

    };

    this.detalleService.agregarDetalle(nuevoDetalle);
  }

  // crearDetalle(inputPrecio: number,inputAdelanto: number,inputDias: number, inputIngreso: Date | null,inputSalida: Date | null){
  //   const nuevoDetalle: DetalleReserva = {
  //     id: 0,
  //     ingreso: inputIngreso,
  //     salida: inputSalida,
  //     precio: inputPrecio,
  //     adelanto: inputAdelanto,
  //     dias: inputDias

  //   };

  //   this.detalleService.agregarDetalle(nuevoDetalle);
  // }

}




