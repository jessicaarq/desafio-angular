import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable, Observer } from 'rxjs';
import { Veiculo } from './veiculo.model';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  listVeiculos$: Observable<Veiculo[]>;

  displayedColumns: string[] = ['id', 'marca', 'modelo', 'ano', 'valor', 'risco'];
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(
    private veiculoService: VeiculosService){}

  ngOnInit(){
    this.listVeiculos$ = this.veiculoService.getVeiculos();
  }


}
