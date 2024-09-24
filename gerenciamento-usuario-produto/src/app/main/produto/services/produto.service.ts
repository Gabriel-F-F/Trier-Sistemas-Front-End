import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private listaProduto: Array<Produto> = [];

  contador = 1;

  constructor() { }

  getList() {
    return this.listaProduto;
  }

  adicionarProduto(produto: Produto) {
    produto.id = this.contador;
    this.listaProduto.push(produto);
    this.contador++;
  }

  atualizarProduto(produto: Produto) {
    this.listaProduto.forEach(item => {
      if (item.id === produto.id) {
        item.nome = produto.nome;
        item.estoque = produto.estoque;
        item.preco = produto.preco;
      }
    });
  }

  findById(id: number) {
    return this.listaProduto.find(produto => produto.id == id);
  }

  excluirUsuario(id: number) {
    this.listaProduto = this.listaProduto.filter(produto => produto.id !== id);
  }
}
