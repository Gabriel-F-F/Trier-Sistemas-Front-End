import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent implements OnInit {

  listaUsuario: Usuario[] = [];

  constructor(
    private service: UsuarioService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.listaUsuario = this.service.getList();
  }

  excluirUsuario(usuario: Usuario) {
    this.service.excluirUsuario(usuario.id!);
    this.atualizarLista();
  }

  editarUsuario(usuario: Usuario) {
    this.route.navigateByUrl(`cadastro/${usuario.id}`)
  }
}
