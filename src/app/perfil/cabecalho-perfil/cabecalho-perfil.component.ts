import { DevagramUsuarioApiService } from './../../compartilhado/servicos/devagram-usuario-api.service';
import { Router } from '@angular/router';
import { UsuarioDevagram } from './../../compartilhado/tipos/usuario-devagram.type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho-perfil',
  templateUrl: './cabecalho-perfil.component.html',
  styleUrls: ['./cabecalho-perfil.component.scss'],
})
export class CabecalhoPerfilComponent implements OnInit {
  @Input() usuario?: UsuarioDevagram | null = null;
  constructor(
    private router: Router,
    private servicoUsuario: DevagramUsuarioApiService

    ) {}

  ngOnInit(): void {}

  public async alternarSeguir(): Promise <void> {
    if (!this.usuario) {
      return;
    }

    try {
      await this.servicoUsuario.alternarSeguir(this.usuario._id);
      this.usuario.segueEsseUsuario = !this.usuario.segueEsseUsuario;
    } catch (e: any) {
      alert(e.error?.erro || 'Erro ao seguir/deixar de seguir o usuario!');
    }
  }

  public voltarParaHome() {
    this.router.navigateByUrl('/');
  }

  public obterCorBotaoPrincipal() {
    if (this.usuario?.segueEsseUsuario) {
      return 'outline';
    }

    return 'primaria';
  }

  public obterTextoBotaoPrincipal() {
    if (this.usuario?.segueEsseUsuario) {
      return 'Deixar de seguir';
    }

    return 'Seguir';
  }
}
