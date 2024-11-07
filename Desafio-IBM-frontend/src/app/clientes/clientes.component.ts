import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClientesComponent {
  cliente = {
    nome: '',
    idade: 0,
    email: '',
    numeroConta: ''
  };

  criarConta() {
    console.log('Cliente cadastrado:', this.cliente);
    alert('Conta criada com sucesso!');
  }
}
