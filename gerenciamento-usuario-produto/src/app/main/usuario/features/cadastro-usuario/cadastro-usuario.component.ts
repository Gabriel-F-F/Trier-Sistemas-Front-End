import { Component, input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { using } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.route.params.subscribe(value => {
      const usuarioEditado = this.service.findById(value["id"]);
      this.form.patchValue(usuarioEditado!);
    });
  }

  buildForm() {
    console.log(this);

    this.form = this.formBuilder.group({
      id: [undefined],
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
      return { idadeInvalida: true };
    }

    return null;
  }

  cadastrar() {
    if (this.form.valid) {
      const usuario = this.form.getRawValue();
      if (usuario.id || usuario.id == 0) {
        this.service.atualizarUsuario(usuario);
      } else {
        this.service.adicionarUsuario(usuario);
        this.form.reset();
        return;
      }
    }
  }
}
