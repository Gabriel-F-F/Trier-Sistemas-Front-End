import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from './../../models/produto';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrl: './listagem-produto.component.scss'
})
export class ListagemProdutoComponent implements OnInit {

 // OBSERVABLE
  subs?: Array<Subscription> = [];


 // OBSERVABLE

  listaProduto: Produto[] = [];

  constructor(
    private service: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.listaProduto = this.service.getList();
  }

  editarProduto(produto: Produto) {
    this.router.navigateByUrl(`produto/cadastro/${produto.id}`)
  }

  excluirProduto(produto: Produto) {
    this.service.excluirUsuario(produto.id!);
    this.atualizarLista();
  }
}
