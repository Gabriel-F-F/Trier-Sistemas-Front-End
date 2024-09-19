import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { CadastroFuncionarioComponent } from './features/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroFuncionarioModule } from './features/cadastro-funcionario/cadastro-funcionario.module';
import { ListagemFuncionarioComponent } from './features/listagem-funcionario/listagem-funcionario.component';
import { ListagemFuncionarioModule } from './features/listagem-funcionario/listagem-funcionario.module';


@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    CadastroFuncionarioModule,
    ListagemFuncionarioModule
  ],
  exports: [
    FuncionarioComponent
  ]
})
export class FuncionarioModule { }
