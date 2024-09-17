import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-formulario',
  templateUrl: './componente-formulario.component.html',
  styleUrl: './componente-formulario.component.scss'
})
export class ComponenteFormularioComponent {
  inputNome = "";
  inputEmail = "";
  inputFone = "";

  enviar(){
    alert("Formulário enviado!")
  }
}
