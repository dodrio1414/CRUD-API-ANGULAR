import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listausuario',
  templateUrl: './listausuario.component.html',
  styleUrls: ['./listausuario.component.css']
})
export class ListausuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.listarUsuario();
   }

  ngOnInit(): void { 
    console.log(this.eliminarUsuario)
  }

  get listaUsuario(){
    return this.usuarioService.lista;
  }

  eliminarUsuario(id: number){
    this.usuarioService.eliminarUsuario(id);
  }

 

}
