import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-form-cliente',
  templateUrl: './componente-form-cliente.component.html',
  styleUrl: './componente-form-cliente.component.scss'
})
export class ComponenteFormClienteComponent {
  @Output() adicionarClienteEvent = new EventEmitter<{ id: number, nome: string, email: string, idade: number }>

  id = 1;
  inputNome = "";
  inputEmail = "";
  inputIdade = "";

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
