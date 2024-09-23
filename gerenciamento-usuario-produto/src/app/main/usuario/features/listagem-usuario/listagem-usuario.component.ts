import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent {

  constructor(private service: UsuarioService) {
    console.log(service.getList());
  }
}
