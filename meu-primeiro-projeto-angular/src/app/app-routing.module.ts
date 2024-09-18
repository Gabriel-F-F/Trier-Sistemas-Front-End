import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteFormClienteComponent } from './componente-form-cliente/componente-form-cliente.component';
import { ComponenteListClienteComponent } from './componente-list-cliente/componente-list-cliente.component';

const routes: Routes = [
  //{ path: "", component: ComponenteFormClienteComponent },
  //{ path: "formulario", component: ComponenteFormClienteComponent },
  //{ path: "listagem", component: ComponenteListClienteComponent }

  { path: "clientesPai",
    component: ComponenteFormClienteComponent,
    children: [
      { path: "listagem", component: ComponenteListClienteComponent },
      { path: "cadastro", component: ComponenteFormClienteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
