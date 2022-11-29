import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.scss'],
})
export class PublicacaoComponent implements OnInit {
  public form: FormGroup;
  public etapaAtual: number = 1;
  public imagemPrevisualizacao?: string;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      file: [null, Validators.required],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  public obterReferenciaInput(nomeInput: string): AbstractControl {
    return this.form.controls[nomeInput];
  }

  public obterImagemEsquerda(): string {
    if (this.estaNaSegundaEtapa()) {
      return 'assets/imagens/setaEsquerda.svg';
    }

    return '';
  }

  public obterTextoAcaoDireita() {
    if (this.estaNaSegundaEtapa()) {
      return 'Compartilhar';
    }

    if (this.obterReferenciaInput('file').value) {
      return 'Avançar';
    }

    return '';
  }

  public estaNaPrimeiraEtapa() {
    return this.etapaAtual === 1;
  }

  public estaNaSegundaEtapa() {
    return this.etapaAtual === 2;
  }

  public manipularCliqueAcaoEsquerda() {
    if (this.estaNaSegundaEtapa()) {
      this.etapaAtual = 1;
    }
  }

  public manipularCliqueAcaoDireita() {
    if (this.estaNaSegundaEtapa()) {
      return;
    }

    this.etapaAtual = 2;
  }

  public armazenarImagemPrevisualizacao(imgPrevisualizacao: string) {
    this.imagemPrevisualizacao = imgPrevisualizacao;
  }

  public obterImagemPrevisualizacao() {
    if (this.imagemPrevisualizacao) {
      return this.imagemPrevisualizacao;
    }

    return 'assets/imagens/imagemPublicacao.svg';
  }

}
