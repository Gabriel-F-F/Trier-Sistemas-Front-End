import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent implements OnInit {

  form!: FormGroup;
  posts: any;

  constructor (
    private formBuilder: FormBuilder,
    private service: ProdutoService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    console.log(this);

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      estoque: [null, (Validators.required, this.validacaoEstoque.bind(this))],
      preco: [null, (Validators.required, this.validacaoPreco.bind(this))]
    });
  }

  validacaoEstoque(estoque: FormGroup) {
    console.log(estoque);
    if (estoque.value <= 0) {
      return { estoqueMinimo: true };
    }
    return null;
  }

  validacaoPreco(preco: FormGroup) {
    console.log(preco);
    if (preco.value <= 0) {
      return { precoMinimo: true };
    }
    return null;
  }

  cadastrar() {
    if (this.form.valid) {
      const produto = {
        id: this.service.getId(),
        nome: this.form.value.nome,
        estoque: this.form.value.estoque,
        preco: this.form.value.preco
      }

      this.service.adicionarProduto(produto);
      console.log(produto);
      this.form.reset();
      return;
    }
  }
}
