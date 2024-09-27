import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRestauranteService {

  constructor(private http: HttpClient) { }

  private apiUrl = "localhost:8080/restaurante/adicionar";

  cadastrarRestaurante(restaurante: Restaurante): Observable<Restaurante> {
    const headers = new HttpHeaders({
      "Content-Type": "aplication/json"
    });
    return this.http.post<Restaurante>(this.apiUrl, restaurante, { headers });
  }
}
