import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { CadastroRestauranteModule } from './features/cadastro-restaurante/cadastro-restaurante.module';
import { ListagemRestauranteModule } from './features/listagem-restaurante/listagem-restaurante.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RestauranteComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    ListagemRestauranteModule,
    HttpClientModule
  ],
  exports: [
    RestauranteComponent
  ]
})
export class RestauranteModule { }
