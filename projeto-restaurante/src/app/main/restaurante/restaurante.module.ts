import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { CadastroRestauranteComponent } from './features/cadastro-restaurante/cadastro-restaurante.component';


@NgModule({
  declarations: [
    CadastroRestauranteComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule
  ]
})
export class RestauranteModule { }
