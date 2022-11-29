import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.scss']
})
export class PublicacaoComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      file: [null, Validators.required],
      descricao: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  public obterReferenciaInput(nomeInput: string): AbstractControl {
    return this.form.controls[nomeInput];
  }

  public obterTextoAcaoEsquerda() {
    if (this.obterReferenciaInput('file').value) {
      return 'Cancelar';
    }

    return '';
  }

  public obterTextoAcaoDireita() {
    if (this.obterReferenciaInput('file').value) {
      return 'Avançar';
    }

    return '';
  }

}
