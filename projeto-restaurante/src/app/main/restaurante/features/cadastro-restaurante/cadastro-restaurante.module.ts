import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRestauranteComponent } from './cadastro-restaurante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroRestauranteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroRestauranteModule { }
