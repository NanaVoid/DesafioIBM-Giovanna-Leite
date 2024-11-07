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

  constructor(private transacoesService: TransacoesService) {}

  verificarConta() {
    this.transacoesService.verificarDadosCliente(this.conta.numeroConta, this.conta.email, this.conta.nome)
      .subscribe({
        next: (isValid) => {
          if (isValid) {

            this.transacoesService.saldo(this.conta.numeroConta).subscribe(saldo => {
              this.saldo = saldo;
              this.exibirSaldo = true;
            });
          } else {
            alert('Dados incorretos! Não foi possível verificar a conta.');
            this.saldo = null;
            this.exibirSaldo = false;
          }
        },
        error: () => {
          alert('Erro ao verificar os dados!');
        }
      });
  }

  realizarTransacao() {
    if (this.operacao && this.saldo !== null) {
      this.transacoesService.fazerTransacao(this.conta.numeroConta, this.valorTransacao, this.operacao)
        .subscribe({
          next: () => {
            alert(`Transação de ${this.operacao} realizada com sucesso!`);
            this.saldo = (this.saldo ?? 0) + (this.operacao === 'credito' ? this.valorTransacao : -this.valorTransacao);
          },
          error: () => {
            alert('Erro ao realizar transação!');
          }
        });
    }
  }
}
