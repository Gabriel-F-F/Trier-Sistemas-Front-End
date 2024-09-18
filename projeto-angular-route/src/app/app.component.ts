import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  listaClientes: { id: number, nome: string, email: string, idade: number }[] = [];
  editarCliente?: { id: number, nome: string, email: string, idade: number };

  receberCliente(cliente: { id: number, nome: string, email: string, idade: number }) {
    this.listaClientes.push(cliente);
  }
}

