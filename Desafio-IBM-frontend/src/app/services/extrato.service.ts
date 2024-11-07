import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  private baseUrl = 'http://localhost:8080/extrato';

  constructor(private http: HttpClient) {}

  getTransacoesPorConta(numeroConta: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/extrato/${numeroConta}`);
  }

  verificarDadosCliente(numeroConta: string, email: string, nome: string): Observable<boolean> {
    const params = new HttpParams()
      .set('numeroConta', numeroConta)
      .set('email', email)
      .set('nome', nome);

    return this.http.get<boolean>(`${this.baseUrl}/verificar-dados`, { params });
  }

  saldo(numeroConta: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/saldo/${numeroConta}`);
  }
}
