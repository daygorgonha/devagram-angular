import { UsuarioDevagram } from './../tipos/usuario-devagram.type';
import { DevagramApiService } from './devagram-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevagramUsuarioApiService extends DevagramApiService{
  bucarDadosUsuario(): Promise<UsuarioDevagram> {
    return this.get('usuario');
  }

}
