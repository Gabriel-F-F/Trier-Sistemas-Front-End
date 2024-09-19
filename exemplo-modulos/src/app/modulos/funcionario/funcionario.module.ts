import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './funcionario.component';



@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FuncionarioComponent
  ]
})
export class FuncionarioModule { }
