import { DevagramUsuarioApiService } from './../../compartilhado/servicos/devagram-usuario-api.service';
import { AutenticacaoService } from './../../compartilhado/autenticacao/autenticacao.service';
import { UsuarioLogado } from './../../compartilhado/autenticacao/usuario-logado.type';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  public form: FormGroup;
  public usuarioLogado?: UsuarioLogado | null;
  public imagemPrevisualizacao?: string;

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private servicoAutenticacao: AutenticacaoService,
    private servicoUsuario: DevagramUsuarioApiService
  ) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();

    this.form = this.fb.group({
      file: [null],
      nome: [
        this.usuarioLogado?.nome,
        [Validators.required, Validators.minLength(3)]
      ]
    });
  }

  ngOnInit(): void {
  }

  public obterReferenciaInput(nomeInput: string): AbstractControl {
    return this.form.controls[nomeInput];
  }

  public voltarParaHome(): void {
    this.router.navigateByUrl('/');
  }

  public async atualizarPerfil(): Promise<void> {
    if (this.form.invalid) {
      return;
    }

    try {
      const valorFormulario = this.form.value;
      const payload = new FormData();
      payload.append('nome', valorFormulario.nome);
      if (valorFormulario.file) {
        payload.append('file', valorFormulario.file);
      }

      await this.servicoUsuario.atualizarPerfil(payload);
      localStorage.setItem('nome', valorFormulario.nome);
      if (this.imagemPrevisualizacao) {
        localStorage.setItem('avatar', this.imagemPrevisualizacao);
      }

      this.router.navigateByUrl('/perfil/pessoal');
    } catch (e: any) {
      alert(e.error?.erro || 'Erro ao editar o perfil');
    }
  }

  public limparInputNome() {
    this.obterReferenciaInput('nome').setValue('');
  }

  public manipularAtualizacaoImagem(imagemPrevisualizacao: string) {
    this.imagemPrevisualizacao = imagemPrevisualizacao;
  }
}
