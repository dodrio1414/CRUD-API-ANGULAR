import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitacion } from '../Interfaces/habitacion.interface';


@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient) { }

  public lista: Habitacion[] = [];

  // hace una lista desde interfaces usuario
  listarHabitacion(){
    this.http.get<Habitacion[]>('http://127.0.0.1:8080/api/habitacion')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarHabitacion(Habitacion: Habitacion){
    this.http.post<any>('http://127.0.0.1:8080/api/habitacion', Habitacion).subscribe();
  }

  eliminarHabitacion(id:number){
    this.http.delete<any>('http://127.0.0.1:8080/api/habitacion/'+ id).subscribe();
  }

  editar(id:number, habitacion: Habitacion){
    this.http.put<any>('http://127.0.0.1:8080/api/habitacion/'+ id, habitacion).subscribe();
  }

}
