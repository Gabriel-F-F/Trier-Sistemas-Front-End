import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { CadastroRestauranteModule } from './features/cadastro-restaurante/cadastro-restaurante.module';
import { ListagemRestauranteModule } from './features/listagem-restaurante/listagem-restaurante.module';

@NgModule({
  declarations: [
    RestauranteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RestauranteRoutingModule,
    CadastroRestauranteModule,
    ListagemRestauranteModule
  ],
  exports: [
    RestauranteComponent
  ]
})
export class RestauranteModule { }
