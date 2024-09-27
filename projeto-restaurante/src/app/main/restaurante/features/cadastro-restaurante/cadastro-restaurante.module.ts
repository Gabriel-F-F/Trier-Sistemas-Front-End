import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRestauranteComponent } from './cadastro-restaurante.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroRestauranteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CadastroRestauranteModule { }
