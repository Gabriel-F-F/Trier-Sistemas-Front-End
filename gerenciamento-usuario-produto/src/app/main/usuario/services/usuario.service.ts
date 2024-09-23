import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private listaUsuario: Array<Usuario> = [];

  constructor() { }

  adicionarUsuario(usuario: Usuario) {
    this.listaUsuario.push(usuario);
  }

  getList() {
    return this.listaUsuario;
  }

  getId(): number {
    if (this.listaUsuario.length === 0) {
      return 1;
    }

    const maiorId = Math.max(...this.listaUsuario.map(usuario => usuario.id));
    return maiorId + 1;
  }

  findById(id: number) {

  }

  excluirUsuario(id: number) {
    this.listaUsuario = this.listaUsuario.filter(usuario => usuario.id !== id);
  }
}
