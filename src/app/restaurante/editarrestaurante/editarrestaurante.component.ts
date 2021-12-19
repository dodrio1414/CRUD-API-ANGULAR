import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/Interfaces/restaurante.interface';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-editarrestaurante',
  templateUrl: './editarrestaurante.component.html',
  styleUrls: ['./editarrestaurante.component.css']
})
export class EditarrestauranteComponent implements OnInit {

  constructor(private restaurante: RestauranteService) { }

  ngOnInit(): void {
  }

  editarRestaurante(inputPlato: string,inputPrecio: number, inputFoto: string){
    const editarRestaurante: Restaurante = {
      id: 0,
      nombrePlato: inputPlato,
      precioPlato: inputPrecio,
      fotoRestaurante: inputFoto,
      tieneDetalleReservaRest: [],
      detalleReservas: []
    };

    this.restaurante.editar(1,editarRestaurante);
  }

}
