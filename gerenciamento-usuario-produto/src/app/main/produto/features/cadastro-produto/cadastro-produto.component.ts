import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent implements OnInit {

  form!: FormGroup;
  posts: any;

  constructor (
    private FormBuilder: FormBuilder,
    //private produtoService: ProductService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    console.log(this);

    this.form = this.FormBuilder.group({
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
      console.log(this.form.getRawValue());
      return;
    }
  }
}
