import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { RestauranteServiceService } from '../../services/restaurante-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-restaurante',
  templateUrl: './listagem-restaurante.component.html',
  styleUrl: './listagem-restaurante.component.scss'
})
export class ListagemRestauranteComponent implements OnInit {

  restauranteList: Restaurante[] = [];

  constructor(
    private service: RestauranteServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAllRestaurantesBD().subscribe(
      (data: Restaurante[]) => {
        this.restauranteList = data;
      },
      (error) => {
        console.log("Erro ao buscar restaurante", error);
      }
    )
  }

  deleteRestaurante(restaurante: Restaurante) {
    this.service.deleteRestaurante(restaurante.id);
  }

  restauranteEdit(restaurante: Restaurante) {
    this.router.navigateByUrl(`restaurante/cadastro/${restaurante.id}`);
  }
}
