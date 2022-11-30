import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public exibirLoading: boolean = true;
  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadingService.escutar((deveExibir: boolean) => {
      this.exibirLoading = deveExibir;
    });
  }

}
