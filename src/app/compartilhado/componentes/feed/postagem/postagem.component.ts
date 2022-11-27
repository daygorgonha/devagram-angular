import { UsuarioLogado } from '../../../autenticacao/usuario-logado.type';
import { Postagem } from './../postagem.type';
import { Component, Input, OnInit } from '@angular/core';

const limiteCaracteresDescricaoPadrao = 90;

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {

  @Input() postagem: Postagem = {} as Postagem;
  @Input() usuarioLogado: UsuarioLogado | null = null;

  public quantidadeLinhasTextarea: number = 1;
  public comentarioAtual: string = '';
  public deveExibirCaixaComentario: boolean = false;
  public limiteCaracteresDescricao: number = limiteCaracteresDescricaoPadrao;
  constructor() { }

  ngOnInit(): void {
  }

  public obterUrlPerfil(): string {
    console.log('obterUrlPerfil');
    return '';
  }

  public exibirDescricaoCompleta() {
    this.limiteCaracteresDescricao = 99999999;
  }

  public obterImagemCurtida(): string {
    console.log('obterImagemCurtida');
    return `assets/imagens/curtir.svg`;
  }

  public manipularCurtida(): string {
    console.log('manipularCurtida');
    return '';
  }

  public obterImagemComentario() {
    const iconeBase = this.deveExibirCaixaComentario
    ? 'comentarioAtivo'
    : 'comentario';

    return `assets/imagens/${iconeBase}.svg`;
  }

  public alternarExibicaoCaixaDeComentario() {
    this.deveExibirCaixaComentario = !this.deveExibirCaixaComentario;
  }

  public fazerComentario() {
    console.log('fazerComentario')
  }

  public verificarQuantidadeLinhas() {
    this.quantidadeLinhasTextarea = this.comentarioAtual.length > 0
    ? 2
    : 1;
  }

}
