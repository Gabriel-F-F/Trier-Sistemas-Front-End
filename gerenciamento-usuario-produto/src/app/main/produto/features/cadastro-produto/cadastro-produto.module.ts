import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroProdutoModule { }
