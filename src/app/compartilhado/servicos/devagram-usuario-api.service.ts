import { UsuarioDevagram } from './../tipos/usuario-devagram.type';
import { DevagramApiService } from './devagram-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevagramUsuarioApiService extends DevagramApiService{
  public buscarDadosUsuario(): Promise<UsuarioDevagram> {
    return this.get('usuario');
  }

  public pesquisarUsuario(filtro: string): Promise<Array<UsuarioDevagram>> {
    return this.get('pesquisa?filtro=' + filtro);
  }

}
