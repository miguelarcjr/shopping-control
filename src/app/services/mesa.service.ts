import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  rota = '/mesas';

  constructor(private http: HttpClient) { }

  read(): Observable<any> {
    return this.http.get<any>(api + this.rota);
  }

  readById(id: number|string): Observable<any> {
    return this.http.get<any>(`${api + this.rota}/${id}`);
  }
}
