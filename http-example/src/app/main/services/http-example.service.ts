import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  constructor(private http: HttpClient) { }

  buscarTodosPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(take(1));
  }

  buscarPorId(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(take(1));
  }

  buscarPorQueryParam(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/comments", { params: { postId: id.toString() } }).pipe(take(1));
  }

  salvarPost() {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", { title: "TESTE" });
  }

  editarPost(id: number) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title: "TESTE" });
  }

  deletePost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(take(1));
  }
}
