import { Postagem } from './postagem.type';
import { DevagramApiService } from './../../servicos/devagram-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends DevagramApiService {

  async carregarPostagens(): Promise<Array<Postagem>> {
    return this.get('feed');
  }
}
