import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from './../../models/produto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrl: './listagem-produto.component.scss'
})
export class ListagemProdutoComponent implements OnInit, OnDestroy {

  listaProduto: Produto[] = [];

  constructor(
    private service: ProdutoService,
    private router: Router
  ) {
    // OBSERVABLE
    this.subs?.push(this.service.tunnedObservable$.subscribe(value => console.log(value)));
    // OBSERVABLE
  }

  // OBSERVABLE
  subs?: Array<Subscription> = [];

  ngOnDestroy(): void {
    console.log("OnDestroy!");
    this.subs?.forEach(subscription => subscription.unsubscribe());
  }

  observable$ = of([1, 2, 3, 4, 5]);
  observablePipe$ = of(1, 2, 3, 4, 5);
  myObservable$ = new Observable(observer => {
    observer.next("Hello");
    observer.next("World");
    observer.complete();
  });
  // OBSERVABLE

  ngOnInit(): void {
    this.atualizarLista();

    // OBSERVABLE
    this.myObservable$.subscribe(value => console.log(value));
    this.myObservable$.subscribe({
      next: value => console.log(value),
      error: err => console.log("Erro: ", err),
      complete: () => console.log("Complete!")
    });
    // OBSERVABLE

  // OBSERVABLE
  this.observablePipe$.pipe(
    filter(value => value % 2 === 0),
    map(value => value * 10)
  ).subscribe(result => {
    console.log(result);
  });
  // OBSERVABLE
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
