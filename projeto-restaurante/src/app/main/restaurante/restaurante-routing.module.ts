import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './restaurante.component';
import { ListagemRestauranteComponent } from './features/listagem-restaurante/listagem-restaurante.component';
import { CadastroRestauranteComponent } from './features/cadastro-restaurante/cadastro-restaurante.component';

const routes: Routes = [
  {
    path: "",
    component: RestauranteComponent,
    children: [
      {
        path: "listagem",
        component: ListagemRestauranteComponent
      },

      {
        path: "cadastro",
        component: CadastroRestauranteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
