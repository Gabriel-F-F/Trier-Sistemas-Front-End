import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestauranteServiceService } from '../../services/restaurante-service.service';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrl: './cadastro-restaurante.component.scss'
})
export class CadastroRestauranteComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: RestauranteServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [undefined],
      cnpj: [null, Validators.required],
      estrelas: [null, (Validators.required, this.validaEstrelas.bind(this))],
      nome: [null, Validators.required],
      tipoComida: [null, (Validators.required, this.validaTipoComida.bind(this))]
    });
  }

  // VALIDAÇÕES

  validaEstrelas(estrelas: FormGroup) {
    if (estrelas.value > 3 || estrelas.value < 0) {
      return { estrelasInvalida: true };
    }

    return null;
  }

  validaTipoComida(tipoComida: FormGroup) {
    if (tipoComida.value > 4 || tipoComida.value < 0) {
      return { tipoComidaInvalido: true };
    }

    return null;
  }

  // VALIDAÇÕES

  addRestaurante() {
    if (this.form.valid) {
      const newRestaurante = this.form.getRawValue();
      if (newRestaurante.id || newRestaurante.id == 0) {
        this.service.updateRestaurante(newRestaurante);
      } else {
        this.service.addRestaurante(newRestaurante);
        this.service.addRestauranteBD(newRestaurante).subscribe((response) => {
          console.log("Restaurante cadastrado com sucesso: ", response);
          this.form.reset();
        },
          error => {
            console.error("Erro ao cadastrar restaurante: ", error);
          }
        );
      }
    } else {
      console.log("Formulário Inválido!")
    }
  }
}
