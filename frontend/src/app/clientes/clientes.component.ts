import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  standalone: true,
  imports: [FormsModule]
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
