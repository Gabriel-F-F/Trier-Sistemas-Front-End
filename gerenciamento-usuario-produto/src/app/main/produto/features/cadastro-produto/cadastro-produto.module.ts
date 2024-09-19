import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CadastroProdutoModule { }
