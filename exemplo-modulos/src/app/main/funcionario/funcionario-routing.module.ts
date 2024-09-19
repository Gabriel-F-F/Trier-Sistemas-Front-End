import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';
import { ListagemFuncionarioComponent } from './features/listagem-funcionario/listagem-funcionario.component';
import { CadastroFuncionarioComponent } from './features/cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [
  {
    path: "", component: FuncionarioComponent,
    children: [
      { path: "", component: ListagemFuncionarioComponent },
      { path: "cadastro", component: CadastroFuncionarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
