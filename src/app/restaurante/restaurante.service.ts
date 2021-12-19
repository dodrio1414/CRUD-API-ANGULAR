import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from '../Interfaces/restaurante.interface';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient) { }

  public lista: Restaurante[] = [];

  // hace una lista desde interfaces usuario
  listarRestaurante(){
    this.http.get<Restaurante[]>('http://127.0.0.1:8080/api/restaurante')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarRestaurante(restaurante: Restaurante){
    this.http.post<any>('http://127.0.0.1:8080/api/restaurante', restaurante).subscribe();
  }

  eliminarRestaurante(id:number){
    this.http.delete<any>('http://127.0.0.1:8080/api/restaurante/'+ id).subscribe();
  }

  editar(id:number, rest: Restaurante){
    this.http.put<any>('http://127.0.0.1:8080/api/restaurante/'+ id, rest).subscribe();
  }

}
