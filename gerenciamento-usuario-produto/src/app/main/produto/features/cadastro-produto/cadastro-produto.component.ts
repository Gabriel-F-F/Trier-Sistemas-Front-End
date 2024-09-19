import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {

  inputNomeProduto = "";
  inputEstoqueProduto = "";
  inputPrecoProduto = "";
}
