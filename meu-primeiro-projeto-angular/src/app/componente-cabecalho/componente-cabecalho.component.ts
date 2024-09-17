import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-cabecalho',
  templateUrl: './componente-cabecalho.component.html',
  styleUrl: './componente-cabecalho.component.scss'
})
export class ComponenteCabecalhoComponent {
  @Input() tituloDoPai?: string;
  @Output() trocarTituloEvent = new EventEmitter<string>();

  @Output() enviarPesquisaEvent = new EventEmitter<string>();

  titulo = 'Meu Título';
  inputPesquisa = "";

  trocarTitulo() {
    this.trocarTituloEvent.emit("Novo Título!");
  }

  enviarPesquisa() {
    this.enviarPesquisaEvent.emit(this.inputPesquisa);
  }
}
