import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  rota = '/vagas';

  constructor(private http: HttpClient) { }

  create(vaga): Observable<any> {
    console.log(vaga);
    return this.http.post<any>(api + this.rota, vaga);
  }

  update(id: number|string, dados): Observable<any> {
    return this.http.put<any>(`${api + this.rota}/${id}`, dados);
  }
  readById(id: number|string): Observable<any> {
    console.log(id);
    return this.http.get<any>(`${api + this.rota}/${id}`);
  }
}
