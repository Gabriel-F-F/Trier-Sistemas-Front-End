import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { ListagemUsuarioComponent } from './features/listagem-usuario/listagem-usuario.component';
import { CadastroUsuarioComponent } from './features/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: "",
    component: UsuarioComponent,
    children: [
      {
        path: "",
        component: ListagemUsuarioComponent
      },

      {
        path: "cadastro",
        component: CadastroUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
