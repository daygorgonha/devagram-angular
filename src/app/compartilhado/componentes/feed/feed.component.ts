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
      usuario: {
        nome: 'Florentina de Jesus',
      },
      foto: 'https://i.pinimg.com/originals/be/2a/b2/be2ab2886bf8e57423e5df0fd8e94130.png'
    } as Postagem,
    {
      quantidadeCurtidas: 32,
      descricao: '',
      usuario: {
        nome: 'Maria do Socorro',
      },
      foto: 'https://artpoin.com/wp-content/uploads/2022/08/flork-fofoqueiro12.png'
    } as Postagem,
  ];

  constructor(private servicoAutenticacao : AutenticacaoService) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
   }

  ngOnInit(): void {
  }


}
