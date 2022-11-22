import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {
  public termoPesquisado: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public irParaHome() {
    this.router.navigateByUrl('/')
  }

  public async pesquisarUsuarios(): Promise<void> {
    console.log(this.termoPesquisado);
  }

}
