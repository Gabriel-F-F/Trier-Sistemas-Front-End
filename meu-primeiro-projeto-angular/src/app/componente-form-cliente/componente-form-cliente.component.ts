import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-form-cliente',
  templateUrl: './componente-form-cliente.component.html',
  styleUrl: './componente-form-cliente.component.scss'
})
export class ComponenteFormClienteComponent {
  @Output() adicionarClienteEvent = new EventEmitter<{id: number, nome: string, email: string, idade: number}>

  id = 0;
  inputNome = "";
  inputEmail = "";
  inputIdade = "";

  enviarCadastro() {
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
  }
}
