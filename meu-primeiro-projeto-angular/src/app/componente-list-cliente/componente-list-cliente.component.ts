import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-componente-list-cliente',
  templateUrl: './componente-list-cliente.component.html',
  styleUrl: './componente-list-cliente.component.scss'
})
export class ComponenteListClienteComponent {
  @Input() listaClientes?: { id: number, nome: string, email: string, idade: number }[];
  @Output() clienteRemovido?: { id: number, nome: string, email: string, idade: number };

  removerCliente(id: number) {
    this.listaClientes?.forEach(cliente => {
      if (cliente.id == id) {
        this.clienteRemovido = cliente;
      }
    });
  }
}
