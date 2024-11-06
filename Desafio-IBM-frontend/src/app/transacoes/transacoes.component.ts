import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css'],

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

  // Dados simulados de clientes
  clientes = [
    { numeroConta: '12345', nome: 'Giovanna Leite', email: 'giovanna@exemplo.com', saldo: 1500.75 },
    { numeroConta: '67890', nome: 'João Silva', email: 'joao@exemplo.com', saldo: 3200.40 }
  ];

  verificarConta() {
    const cliente = this.clientes.find(cliente =>
      cliente.numeroConta === this.conta.numeroConta &&
      cliente.nome === this.conta.nome &&
      cliente.email === this.conta.email
    );

    if (cliente) {
      this.saldo = cliente.saldo;
      this.exibirSaldo = true;
    } else {
      alert('Dados incorretos! Não foi possível verificar a conta.');
      this.saldo = null;
      this.exibirSaldo = false;
    }
  }

  realizarTransacao() {
    if (this.operacao && this.saldo !== null) {
      if (this.operacao === 'credito') {
        this.saldo += this.valorTransacao;
      } else if (this.operacao === 'debito') {
        if (this.saldo >= this.valorTransacao) {
          this.saldo -= this.valorTransacao;
        } else {
          alert('Saldo insuficiente para débito!');
          return;
        }
      }
      alert(`Transação de ${this.operacao} realizada com sucesso!`);
    }
  }
}
