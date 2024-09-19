import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full"},
  { path: "dashboard", component: DashboardComponent },
  { path: "cadastrar-clientes", component: FormularioClienteComponent},
  { path: "listar-clientes", component: ListagemClienteComponent},
  { path: "editar-cliente/:id", component: FormularioClienteComponent},
  { path: "**", component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
