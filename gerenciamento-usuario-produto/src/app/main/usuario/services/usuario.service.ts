import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private listaUsuario: Array<Usuario> = [];

  contador = 1;

  constructor() { }

  getList() {
    return this.listaUsuario;
  }

  findById(id: number) {
    return this.listaUsuario.find(usuario => usuario.id == id);
  }

  adicionarUsuario(usuario: Usuario) {
    usuario.id = this.contador;
    this.listaUsuario.push(usuario);
    this.contador++;
  }

  atualizarUsuario(usuario: Usuario) {
    this.listaUsuario.forEach(item => {
      if (item.id === usuario.id) {
        item.nome = usuario.nome;
        item.idade = usuario.idade;
        item.email = usuario.email;
      }
    });
  }

  excluirUsuario(id: number) {
    this.listaUsuario = this.listaUsuario.filter(usuario => usuario.id !== id);
  }
}
