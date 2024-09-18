import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.scss'
})
export class FormularioClienteComponent {
  @Output() adicionarClienteEvent = new EventEmitter<{ id: number, nome: string, email: string, idade: number }>

  id = 1;
  inputNome = "";
  inputEmail = "";
  inputIdade = "";

  // EXEMPLO ROUTE formulario/:id
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((valores) => {
      console.log(valores);
      const idCliente = valores["id"];
      console.log(idCliente);
    });
  }
  // EXEMPLO ROUTE formulario/:id

  adicionarCliente() {
    if (this.inputNome && this.inputEmail && this.inputIdade) {
      const cliente = {
        id: this.id,
        nome: this.inputNome,
        email: this.inputEmail,
        idade: Number(this.inputIdade)
      };

      this.adicionarClienteEvent.emit(cliente);
      this.id++;

      this.inputNome = "";
      this.inputEmail = "";
      this.inputIdade = "";

    } else {
      alert("Cadastro de Cliente Incompleto!")
    }
  }
}
