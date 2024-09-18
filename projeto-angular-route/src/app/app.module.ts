import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { FormsModule } from '@angular/forms';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioClienteComponent,
    ListagemClienteComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
