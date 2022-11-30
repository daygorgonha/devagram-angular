import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private emitter = new EventEmitter<boolean>();

  escutar(funcaoASerChamada: Function) {
    this.emitter.subscribe(funcaoASerChamada);
  }

  public exibir() {
    this.emitter.emit(true);
  }

  public ocultar() {
    this.emitter.emit(false);
  }
}
