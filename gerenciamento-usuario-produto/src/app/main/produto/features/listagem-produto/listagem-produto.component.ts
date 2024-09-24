import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from './../../models/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrl: './listagem-produto.component.scss'
})
export class ListagemProdutoComponent implements OnInit {

  listaProduto: Produto[] = [];

  ngOnInit(): void {
    this.atualizarLista();
  }

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((id) => {
      console.log(id);
    })
  }

  excluirProduto(produto: Produto) {
    this.service.excluirUsuario(produto.id!);
    this.atualizarLista();
  }

  atualizarLista() {
    this.listaProduto = this.service.getList();
  }
}
