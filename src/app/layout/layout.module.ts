import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    NavegacaoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CompartilhadoModule
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent
  ]
})
export class LayoutModule { }
