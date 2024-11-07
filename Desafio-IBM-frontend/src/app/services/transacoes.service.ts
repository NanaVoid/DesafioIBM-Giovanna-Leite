import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  private baseUrl = 'http://localhost:8080/transacoes';

  constructor(private http: HttpClient) {}


  saldo(numeroConta: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/saldo/${numeroConta}`);
  }


  fazerTransacao(numeroConta: string, valor: number, tipo: string): Observable<any> {
    const params = new HttpParams()
      .set('numeroConta', numeroConta)
      .set('valor', valor.toString())
      .set('tipo', tipo);

    return this.http.post<any>(this.baseUrl, null, { params });
  }


  verificarDadosCliente(numeroConta: string, email: string, nome: string): Observable<boolean> {
    const params = new HttpParams()
      .set('numeroConta', numeroConta)
      .set('email', email)
      .set('nome', nome);

    return this.http.get<boolean>(`${this.baseUrl}/verificar-dados`, { params });
  }
}
