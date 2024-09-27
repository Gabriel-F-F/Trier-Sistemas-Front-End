import { Component, OnInit } from '@angular/core';
import { HttpRestauranteService } from '../../services/http-restaurante.service';
import { Restaurante } from '../../../models/restaurante';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrl: './cadastro-restaurante.component.scss'
})
export class CadastroRestauranteComponent implements OnInit {

  constructor(private service: HttpRestauranteService) { }

  novoRestaurante: Restaurante = {
    id: 103,
    cnpj: "123",
    estrelas: 1,
    nome: "RestauranteTeste",
    tipoComida: 1
  }

  ngOnInit(): void {
  }

  cadastrar() {
    this.service.cadastrarRestaurante(this.novoRestaurante).subscribe(restaurante => {
      console.log("Salvando Restaurante: ", restaurante);
    },
      error => {
        console.log("Erro ao cadastrar restaurante: ", error);
      }
    )
  }
}
