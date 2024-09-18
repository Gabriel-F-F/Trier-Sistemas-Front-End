import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-list-cliente',
  templateUrl: './componente-list-cliente.component.html',
  styleUrl: './componente-list-cliente.component.scss'
})
export class ComponenteListClienteComponent {
  @Input() listaClientes?: { id: number, nome: string, email: string, idade: number }[];

  exibirClientes() {
    console.log(this.listaClientes);
  }
}
