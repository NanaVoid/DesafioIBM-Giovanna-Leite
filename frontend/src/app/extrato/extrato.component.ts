import { Component } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent {
  conta = {
    numeroConta: '',
    nome: '',
    email: ''
  };

  saldo: number | null = null;
  exibirSaldo = false;

  // Dados simulados de clientes
  clientes = [
    { numeroConta: '12345', nome: 'Giovanna Leite', email: 'giovanna@exemplo.com', saldo: 1500.75 },
    { numeroConta: '67890', nome: 'João Silva', email: 'joao@exemplo.com', saldo: 3200.40 }
  ];

  verificarConta() {
    // Procurar um cliente que corresponda aos dados fornecidos
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
}
