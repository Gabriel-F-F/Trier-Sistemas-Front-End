import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Meu Primeiro Projeto Angular';
  pesquisa = "";

  clientes = [
    { nome: "Gabriel" },
    { nome: "Nasser" },
    { nome: "Hugo" },
    { nome: "Vitor" },
    { nome: "Márcio" }
  ]

  adicionarClientes() {
    this.clientes.push({ nome: "Teste" });
  }

  trocarTitulo(titulo: string) {
    this.title = titulo;
  }

  enviarPesquisa(pesquisa: string) {
    this.title = pesquisa;
  }


  // CLIENTES

  listaClientes: { id: number, nome: string, email: string, idade: number }[] = [];
  
  receberCliente(cliente: { id: number, nome: string, email: string, idade: number }) {
    this.listaClientes.push(cliente);
  }

  editarCliente?: { id: number, nome: string, email: string, idade: number };

  editarClienteEvent(cliente: { id: number, nome: string, email: string, idade: number }) {
    this.listaClientes.forEach(item => {
      if (item.id == cliente.id) {
        item.nome = cliente.nome;
        item.email = cliente.email;
        item.idade = cliente.idade;
      }
    });
  }

  enviarEdicaoCliente(cliente: { id: number, nome: string, email: string, idade: number }) {
    this.editarCliente = cliente;
  }

  removerCliente(id: number) {
    this.listaClientes = this.listaClientes.filter(cliente => cliente.id !== id);
  }
}
