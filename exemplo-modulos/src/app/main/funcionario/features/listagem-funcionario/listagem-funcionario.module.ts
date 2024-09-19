import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemFuncionarioRoutingModule } from './listagem-funcionario-routing.module';
import { ListagemFuncionarioComponent } from './listagem-funcionario.component';


@NgModule({
  declarations: [
    ListagemFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ListagemFuncionarioRoutingModule
  ]
})
export class ListagemFuncionarioModule { }
