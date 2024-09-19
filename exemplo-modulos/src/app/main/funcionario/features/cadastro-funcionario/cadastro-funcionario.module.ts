import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroFuncionarioRoutingModule } from './cadastro-funcionario-routing.module';
import { CadastroFuncionarioComponent } from './cadastro-funcionario.component';


@NgModule({
  declarations: [
    CadastroFuncionarioComponent
  ],
  imports: [
    CommonModule,
    CadastroFuncionarioRoutingModule
  ]
})
export class CadastroFuncionarioModule { }
