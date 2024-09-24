import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent implements OnInit {

  form!: FormGroup;
  posts: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.route.params.subscribe(value => {
      const produtoEditado = this.service.findById(value["id"]);
      this.form.patchValue(produtoEditado!);
    });
  }

  buildForm() {
    console.log(this);

    this.form = this.formBuilder.group({
      id: [undefined],
      nome: [null, Validators.required],
      estoque: [null, (Validators.required, this.validacaoEstoque.bind(this))],
      preco: [null, (Validators.required, this.validacaoPreco.bind(this))]
    });
  }

  validacaoEstoque(estoque: FormGroup) {
    if (estoque.value <= 0) {
      return { estoqueMinimo: true };
    }
    return null;
  }

  validacaoPreco(preco: FormGroup) {
    if (preco.value <= 0) {
      return { precoMinimo: true };
    }
    return null;
  }

  cadastrar() {
    if (this.form.valid) {
      const produto = this.form.getRawValue();
      if (produto.id || produto.id == 0) {
        this.service.atualizarProduto(produto);
      } else {
        this.service.adicionarProduto(produto);
        this.form.reset();
        return;
      }
    }
  }
}
