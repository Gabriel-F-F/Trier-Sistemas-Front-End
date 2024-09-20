import { Component, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-form-cliente',
  templateUrl: './componente-form-cliente.component.html',
  styleUrl: './componente-form-cliente.component.scss'
})
export class ComponenteFormClienteComponent {
  @Output() adicionarClienteEvent = new EventEmitter<{ id: number, nome: string, email: string, idade: number }>
  @Output() editandoClienteEvent = new EventEmitter<{ id: number, nome: string, email: string, idade: number }>
  @Input() clienteEditado?: { id: number, nome: string, email: string, idade: number }

  id = 1;
  inputNome?: string;
  inputEmail?: string;
  inputIdade?: number;

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
    if (this.inputNome && this.inputEmail && this.inputIdade && !this.clienteEditado) {
      const cliente = {
        id: this.id,
        nome: this.inputNome,
        email: this.inputEmail,
        idade: Number(this.inputIdade)
      } 
      this.adicionarClienteEvent.emit(cliente);
      this.id++;

    } else if (this.inputNome && this.inputEmail && this.inputIdade && this.clienteEditado) {
      const clienteEditado = {
        id: this.clienteEditado.id,
        nome: this.inputNome,
        email: this.inputEmail,
        idade: Number(this.inputIdade)
      } 
      this.editandoClienteEvent.emit(clienteEditado)
    
    } else {
      alert("Cadastro de Cliente Incompleto!")
    }

    this.inputNome = "";
    this.inputEmail = "";
    this.inputIdade = Number("");
    this.clienteEditado = undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.clienteEditado) {
      this.inputNome = this.clienteEditado.nome;
      this.inputEmail = this.clienteEditado.email;
      this.inputIdade = this.clienteEditado.idade;
    }
  }
}
