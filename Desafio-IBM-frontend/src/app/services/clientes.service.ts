import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  cadastrarCliente(clientes: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.apiUrl, clientes);
  }
}
