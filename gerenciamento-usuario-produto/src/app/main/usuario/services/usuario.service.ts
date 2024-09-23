import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuario: Array<Usuario> = [];

  constructor() { }

  adicionarUsuario(usuario: Usuario) {
    this.listaUsuario.push(usuario);
  }

  getList() {
    return this.listaUsuario;
  }
}
