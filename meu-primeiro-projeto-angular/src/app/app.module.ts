import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { ComponenteCabecalhoComponent } from './componente-cabecalho/componente-cabecalho.component';
import { ComponenteConteudoComponent } from './componente-conteudo/componente-conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    ComponenteCabecalhoComponent,
    ComponenteConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
