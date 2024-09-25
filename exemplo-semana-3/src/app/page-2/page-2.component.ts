import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrl: './page-2.component.scss'
})
export class Page2Component {
  hoje = new Date();
  preco = 7.99;
  porcentagem = 0.9;
  texto = "Gabriel";
  numero = 8;

  constructor(private route: ActivatedRoute) {
    console.log("pagina 2 -> ", this.route.snapshot.data["user"]);
  }
}
