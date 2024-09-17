import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-form-cliente',
  templateUrl: './componente-form-cliente.component.html',
  styleUrl: './componente-form-cliente.component.scss'
})
export class ComponenteFormClienteComponent {
  @Output() adicionarClienteEvent = new EventEmitter<{nome: string, email: string, idade: string}>

  inputNome = "";
  inputEmail = "";
  inputIdade = "";

  enviarCadastro() {
    const cliente = {
      nome: this.inputNome,
      email: this.inputEmail,
      idade: this.inputIdade
    };

    this.adicionarClienteEvent.emit(cliente);

    this.inputNome = "";
    this.inputEmail = "";
    this.inputIdade = "";
  }
}
