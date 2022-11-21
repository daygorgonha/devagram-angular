import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { confirmacaoSenha } from '../compartilhado/validadores/confirmacao-senha.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      file: [null],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmacaoSenha: ['', [Validators.required, confirmacaoSenha()]],
    });
   }

  ngOnInit(): void {
  }

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }

  public aoSubmeter() {
    console.log('teste submit');
  }

}
