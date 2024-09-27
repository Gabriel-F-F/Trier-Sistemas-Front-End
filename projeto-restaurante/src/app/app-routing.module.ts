import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './main/restaurante/restaurante.component';

const routes: Routes = [
  {
    path: "restaurante",
    loadChildren: () => import("./main/restaurante/cadastro-restaurante.module").then((m) => m.CadastroRestauranteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
