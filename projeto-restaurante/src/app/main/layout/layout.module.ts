import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
