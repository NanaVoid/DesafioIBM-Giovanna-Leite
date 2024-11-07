import { Component } from '@angular/core';
import { TransacoesService } from '../services/transacoes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TransacoesComponent {
  conta = {
    numeroConta: '',
    nome: '',
    email: ''
  };

  saldo: number | null = null;
  exibirSaldo = false;
  operacao: 'credito' | 'debito' | null = null;
  valorTransacao: number = 0;
  erro: string = '';

  constructor(private transacoesService: TransacoesService) {}

  verificarConta() {

    if (!this.conta.numeroConta || !this.conta.nome || !this.conta.email) {
      this.erro = 'Todos os campos são obrigatórios!';
      return;
    } else {
      this.erro = '';
    }

    this.transacoesService.verificarDadosCliente(this.conta.numeroConta, this.conta.email, this.conta.nome)
      .subscribe({
        next: (isValid) => {
          if (isValid) {
            this.transacoesService.saldo(this.conta.numeroConta).subscribe(saldo => {
              this.saldo = saldo;
              this.exibirSaldo = true;
            });
          } else {
            this.erro = 'Dados incorretos! Não foi possível verificar a conta.';
            this.saldo = null;
            this.exibirSaldo = false;
          }
        },
        error: () => {
          this.erro = 'Erro ao verificar os dados!';
        }
      });
  }

  realizarTransacao() {
    if (!this.operacao || this.valorTransacao <= 0) {
      this.erro = 'Escolha uma operação válida e insira um valor positivo!';
      return;
    }

    if (this.saldo !== null) {
      this.transacoesService.fazerTransacao(this.conta.numeroConta, this.valorTransacao, this.operacao)
        .subscribe({
          next: () => {
            alert(`Transação de ${this.operacao} realizada com sucesso!`);
            this.saldo = (this.saldo ?? 0) + (this.operacao === 'credito' ? this.valorTransacao : -this.valorTransacao);
            this.erro = '';
          },
          error: () => {
            this.erro = 'Erro ao realizar a transação!';
          }
        });
    }
  }
}
