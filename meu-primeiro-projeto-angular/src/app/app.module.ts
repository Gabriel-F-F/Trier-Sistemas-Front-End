import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { ComponenteCabecalhoComponent } from './componente-cabecalho/componente-cabecalho.component';
import { ComponenteConteudoComponent } from './componente-conteudo/componente-conteudo.component';
import { FormsModule } from '@angular/forms';
import { ComponenteFormularioComponent } from './componente-formulario/componente-formulario.component';
import { ComponenteFormClienteComponent } from './componente-form-cliente/componente-form-cliente.component';
import { ComponenteListClienteComponent } from './componente-list-cliente/componente-list-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    ComponenteCabecalhoComponent,
    ComponenteConteudoComponent,
    ComponenteFormularioComponent,
    ComponenteFormClienteComponent,
    ComponenteListClienteComponent
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
