import { UsuarioLogado } from './../../../autenticacao/usuario-logado.type';
import { AutenticacaoService } from './../../../autenticacao/autenticacao.service';
import { Postagem } from './postagem.type';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public usuarioLogado: UsuarioLogado | null;
  public postagens: Array<Postagem> = [
    {
      quantidadeCurtidas: 32,
      descricao: '',
      comentarios: [
        {
          nome: 'Usuario1',
          comentario: 'Oi'
        }
      ],
      usuario: {
        nome: 'Usuario 1',
      },
      foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.123rf.com%2Fphoto_57845256_vector-visage-f%25C3%25A9minin-avatar-logo-mod%25C3%25A8le-pictogramme-bouton-ic%25C3%25B4ne-plat-rond-%25C3%25A0-la-mode-avec-des-femme.html&psig=AOvVaw0iBqJp8861P1PAzLGXOy_V&ust=1669325237525000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDlmKCfxfsCFQAAAAAdAAAAABAU'
    } as Postagem,
    {
      quantidadeCurtidas: 32,
      descricao: '',
      comentarios: [
        {
          nome: 'Usuario2',
          comentario: 'Oi'
        }
      ],
      usuario: {
        nome: 'Usuario 2',
      },
      foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.123rf.com%2Fphoto_57845256_vector-visage-f%25C3%25A9minin-avatar-logo-mod%25C3%25A8le-pictogramme-bouton-ic%25C3%25B4ne-plat-rond-%25C3%25A0-la-mode-avec-des-femme.html&psig=AOvVaw0iBqJp8861P1PAzLGXOy_V&ust=1669325237525000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDlmKCfxfsCFQAAAAAdAAAAABAU'
    } as Postagem
  ];
  constructor(private servicoAutenticacao : AutenticacaoService) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
   }

  ngOnInit(): void {
  }


}
