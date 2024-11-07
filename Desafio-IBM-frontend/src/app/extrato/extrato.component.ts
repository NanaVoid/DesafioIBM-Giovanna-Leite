import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExtratoService } from '../services/extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ExtratoComponent {
  conta = {
    numeroConta: '',
    nome: '',
    email: ''
  };

  saldo: number | null = null;
  exibirSaldo = false;
  transacoes: any[] = [];
  erro: string = '';

  constructor(private extratoService: ExtratoService) {}

  verificarConta() {

    if (!this.conta.numeroConta || !this.conta.nome || !this.conta.email) {
      this.erro = 'Todos os campos são obrigatórios!';
      return;
    } else {
      this.erro = '';
    }

    this.extratoService.verificarDadosCliente(this.conta.numeroConta, this.conta.email, this.conta.nome)
      .subscribe({
        next: (isValid) => {
          if (isValid) {
            this.carregarSaldoETransacoes(this.conta.numeroConta);
          } else {
            this.erro = 'Dados incorretos! Não foi possível verificar a conta.';
            this.saldo = null;
            this.transacoes = [];
            this.exibirSaldo = false;
          }
        },
        error: () => {
          this.erro = 'Erro ao verificar os dados!';
        }
      });
  }

  carregarSaldoETransacoes(numeroConta: string) {
    this.extratoService.saldo(numeroConta).subscribe(
      (saldo) => {
        this.saldo = saldo;
        this.exibirSaldo = true;
      },
      (error) => {
        this.erro = 'Erro ao carregar o saldo!';
        console.error(error);
      }
    );

    this.extratoService.getTransacoesPorConta(numeroConta).subscribe(
      (transacoes) => {
        this.transacoes = transacoes;
      },
      (error) => {
        this.erro = 'Erro ao carregar as transações!';
        console.error(error);
      }
    );
  }
}
