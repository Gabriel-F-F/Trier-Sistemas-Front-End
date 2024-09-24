import { Component, OnInit } from '@angular/core';
import { HttpExampleService } from './main/services/http-example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = "123";

  constructor(private service: HttpExampleService) { }

  ngOnInit(): void {
    this.service.buscarTodosPosts().subscribe(value => {
      console.log(value);
    });
    this.service.buscarPorId(1).subscribe(value => {
      console.log("Buscar por Id: ", value)
    });
    this.service.buscarPorQueryParam(2).subscribe(value => {
      console.log("Buscar por QuestParam: ", value)
    });
    this.service.salvarPost().subscribe(value => {
      console.log("Salvando Post: ", value)
    });
    this.service.editarPost(1).subscribe(value => {
      console.log("Editando Post 1: ", value)
    });
    this.service.deletePost(2).subscribe(value => {
      console.log("Deletou Post 2: ", value)
    });
  }
}
