import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';



@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class LayoutModule { }
