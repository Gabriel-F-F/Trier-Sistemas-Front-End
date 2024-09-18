import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrl: './listagem-cliente.component.scss'
})
export class ListagemClienteComponent {
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
