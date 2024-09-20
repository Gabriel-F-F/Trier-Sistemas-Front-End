import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-componente-list-cliente',
  templateUrl: './componente-list-cliente.component.html',
  styleUrl: './componente-list-cliente.component.scss'
})
export class ComponenteListClienteComponent {
  @Input() listaClientes?: { id: number, nome: string, email: string, idade: number }[];
  @Output() clienteRemovidoEvent = new EventEmitter<number>(); 
  @Output() editandoClienteEvent = new EventEmitter<{ id: number, nome: string, email: string, idade: number }>();

  editandoCliente(cliente: { id: number, nome: string, email: string, idade: number }) {
    this.editandoClienteEvent.emit(cliente);
  }

  removerCliente(id?: number) {
      if (id || id == 0) {
        this.clienteRemovidoEvent.emit(id);
      }
  }
}
