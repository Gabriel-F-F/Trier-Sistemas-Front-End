import { Component, input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { using } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((id) => {
      console.log(id);
    })
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    console.log(this);

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      idade: [null, (Validators.required, this.validacaoIdade.bind(this))],
      email: [null, Validators.required]
    });
  }

  validacaoIdade(idade: FormGroup) {
    if (idade.value < 18) {
      return { idadeInvalida: true };
    }

    if (idade.value >= 100) {
      return { idadeInvalida: true};
    }

    return null;
  }

  cadastrar() {
    if (this.form.valid) {
      const usuario = {
        id: this.service.getId(),
        nome: this.form.value.nome,
        idade: this.form.value.idade,
        email: this.form.value.email
      };

      this.service.adicionarUsuario(usuario);
      console.log(usuario);
      this.form.reset();
      return;
    }
  }
}
