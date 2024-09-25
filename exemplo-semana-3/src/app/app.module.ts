import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinhaDirectiveDirective } from './directive/minha-directive.directive';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { SubcomponenteComponent } from './subcomponente/subcomponente.component';
import { MultiplicadorPipe } from './pipe/multiplicador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MinhaDirectiveDirective,
    Page1Component,
    Page2Component,
    MultiplicadorPipe,
    SubcomponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
