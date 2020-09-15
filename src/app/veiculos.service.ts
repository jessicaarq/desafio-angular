import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from './veiculo.model'

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  readonly url: string  = 'http://localhost:8080/rest/'
  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(`${this.url}veiculo`)
  }
}
