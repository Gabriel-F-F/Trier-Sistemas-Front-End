import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
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
    ListagemUsuarioModule
  ],
  exports: [
    UsuarioComponent
  ]
})
export class UsuarioModule { }
