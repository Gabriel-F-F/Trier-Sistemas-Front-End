import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteServiceService {

  constructor(private http: HttpClient) { }

  private listaRestaurante: Array<Restaurante> = [];

  private apiUrl = '//localhost:8080/restaurante/adicionar';
  private apiUrlGetAll = 'http://localhost:8080/restaurante/buscar';

  contador = 1;

  getList() {
    return this.listaRestaurante;
  }

  findRestauranteById(id: number) {
    return this.listaRestaurante.find(restaurante => restaurante.id == id);
  }

  addRestaurante(newRestaurante: Restaurante) {
    newRestaurante.id = this.contador;
    this.listaRestaurante.push(newRestaurante);
    this.contador++;
  }

  getAllRestaurantesBD(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.apiUrlGetAll);
  }

  addRestauranteBD(restaurante: Restaurante): Observable<Restaurante> {
    return this.http.post<Restaurante>('http://localhost:8080/restaurante/adicionar', restaurante, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  updateRestaurante(restaurente: Restaurante) {
    this.listaRestaurante.forEach(item => {
      if (item.id === restaurente.id) {
        item.cnpj = restaurente.cnpj;
        item.estrelas = restaurente.estrelas;
        item.nome = restaurente.nome;
        item.tipoComida = restaurente.tipoComida;
      }
    });
  }

  deleteRestaurante(id: number) {
    this.listaRestaurante = this.listaRestaurante.filter(restaurante => restaurante.id !== id);
  }
}
