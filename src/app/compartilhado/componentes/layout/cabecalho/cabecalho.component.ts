import { AutenticacaoService } from '../../../autenticacao/autenticacao.service';
import { DevagramUsuarioApiService } from '../../../servicos/devagram-usuario-api.service';
import { UsuarioDevagram } from '../../../tipos/usuario-devagram.type';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
  public termoPesquisado: string = '';
  public resultadoDaPesquisa: Array<UsuarioDevagram> = [];
  constructor(
    private router: Router,
    private apiUsuarioDevagram: DevagramUsuarioApiService,
    private servicoAutenticacao: AutenticacaoService
  ) { }

  ngOnInit(): void {
  }

  public irParaHome() {
    this.router.navigateByUrl('/')
  }

  public async pesquisarUsuarios(): Promise<void> {
    this.resultadoDaPesquisa = [];
    if (this.termoPesquisado.length < 3) {
      return;
    }

    try {
      const usuariosRetornados = await this.apiUsuarioDevagram.pesquisarUsuario(
        this.termoPesquisado
      );

      const usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
      this.resultadoDaPesquisa = usuariosRetornados.filter(ur => ur._id !== usuarioLogado?.id);
    } catch (e: any) {
      if (e.status !== 400) {
        alert(e?.erro.erro ||'Erro ao pesquisar usuarios!' );
      }
    }
  }

  public irParaOPerfilDoUsuario(idUsuario: string): void {
    this.router.navigate(['perfil', idUsuario]);
  }

}
