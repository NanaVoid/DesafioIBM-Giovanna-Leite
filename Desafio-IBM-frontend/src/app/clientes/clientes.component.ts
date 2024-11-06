import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  cliente = {
    nome: '',
    idade: null,
    email: '',
    numeroConta: ''
  };

  criarConta() {
    console.log('Cliente cadastrado:', this.cliente);
    alert('Conta criada com sucesso!');
  }
}
