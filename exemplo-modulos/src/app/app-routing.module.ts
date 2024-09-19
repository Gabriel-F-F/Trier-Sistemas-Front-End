import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "produto",
    loadChildren: () => import("./main/produto/produto.module").then((m) => m.ProdutoModule)
  },

  {
    path: "funcionario",
    loadChildren: () => import("./main/funcionario/funcionario.module").then((m) => m.FuncionarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
