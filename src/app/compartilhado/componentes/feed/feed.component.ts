import { FeedService } from './feed.service';
import { UsuarioLogado } from '../../autenticacao/usuario-logado.type';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';
import { Postagem } from './postagem.type';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public usuarioLogado: UsuarioLogado | null;
  public postagens: Array<Postagem> = [];

  constructor(
    private servicoAutenticacao : AutenticacaoService,
    private servicoFeed: FeedService) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
   }

  async ngOnInit(): Promise<void> {
    try{
     this.postagens = await this.servicoFeed.carregarPostagens();
    } catch (e: any) {
      alert(e.error?.erro|| 'Erro ao carregar o feed');
    }
  }
}
