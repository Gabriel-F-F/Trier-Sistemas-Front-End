import { Component } from '@angular/core';

@Component({
  selector: 'app-subcomponente',
  templateUrl: './subcomponente.component.html',
  styleUrl: './subcomponente.component.scss'
})
export class SubcomponenteComponent {
  title = "Título SubComponente!"

  logaValor() {
    console.log("Valor!");
  }
}
