import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteFormClienteComponent } from './componente-form-cliente/componente-form-cliente.component';
import { ComponenteListClienteComponent } from './componente-list-cliente/componente-list-cliente.component';

const routes: Routes = [

  { path: "", component: ComponenteFormClienteComponent },
  { path: "teste", redirectTo: "cliente" },
  { path: "cliente", component: ComponenteListClienteComponent },
  { path: "formulario", component: ComponenteFormClienteComponent },
  // EXEMPLO ROUTE formulario/:id
  { path: "formulario/:id", component: ComponenteFormClienteComponent },
  // EXEMPLO ROUTE formulario/:id

  // { path: "clientes",
  //   children: [
  //     { path: "listagem", component: ComponenteListClienteComponent },
  //     { path: "cadastro", component: ComponenteFormClienteComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
