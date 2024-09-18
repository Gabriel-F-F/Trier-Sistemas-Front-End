import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: "",
  children: [
  { path: "cadastrar-clientes", component: FormularioClienteComponent},
  { path: "listar-clientes", component: ListagemClienteComponent},
  { path: "**", component: NaoEncontradoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
