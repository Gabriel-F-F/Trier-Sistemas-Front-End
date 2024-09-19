import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { CadastroUsuarioModule } from './features/cadastro-usuario/cadastro-usuario.module';
import { ListagemUsuarioModule } from './features/listagem-usuario/listagem-usuario.module';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CadastroUsuarioModule,
    ListagemUsuarioModule,
    FormsModule
  ],
  exports: [
    UsuarioComponent
  ]
})
export class UsuarioModule { }
