import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private listaProduto: Array<Produto> = [];

  constructor() { }

  adicionarProduto(produto: Produto) {
    this.listaProduto.push(produto);
  }

  getList() {
    return this.listaProduto;
  }

  getId(): number {
    if (this.listaProduto.length === 0) {
      return 1;
    }

    const maiorId = Math.max(...this.listaProduto.map(produto => produto.id));
    return maiorId + 1;
  }
}
