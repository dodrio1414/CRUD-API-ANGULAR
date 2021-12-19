import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/Interfaces/habitacion.interface';
import { HabitacionService } from '../habitacion.service';

@Component({
  selector: 'app-editarhabitacion',
  templateUrl: './editarhabitacion.component.html',
  styleUrls: ['./editarhabitacion.component.css']
})
export class EditarhabitacionComponent implements OnInit {

  constructor(private habitacionService: HabitacionService) { }

  ngOnInit(): void {
  }

  editarHabitacion(inputNombre: string,inputEstado: string,inputTipo: string,inputPrecio: number,inputDescripcion: string,inputFoto: string){
    const editarHabitacion: Habitacion = {
      id: 0,
      nombreHabitacion: inputNombre,
      fotoHabitacion: inputFoto,
      estadoHabitacion: inputEstado,
      tipoHabitacion: inputTipo,
      precioHabitacion: inputPrecio,
      descripcionHabitacion: inputDescripcion,
      tieneDetalleReservaHab: []
    };

    this.habitacionService.editar(2,editarHabitacion);
  }

}
