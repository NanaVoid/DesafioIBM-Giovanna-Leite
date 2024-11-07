import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../models/clientes.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  standalone: true,
  styleUrls: ['./clientes.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ClientesComponent {
  cliente: Clientes = { nome: '', idade: 0, endereco: '', email: '', numeroConta: '' };

  sucessoMensagem: string = '';
  erroMensagem: string = '';

  constructor(private clientesService: ClientesService) {}

  cadastrarCliente() {

    this.sucessoMensagem = '';
    this.erroMensagem = '';


    if (!this.cliente.nome || !this.cliente.idade || !this.cliente.endereco || !this.cliente.email || !this.cliente.numeroConta) {
      this.erroMensagem = 'Todos os campos são obrigatórios.';
      return;
    }


    if (this.cliente.numeroConta.length !== 7) {
      this.erroMensagem = 'O número da conta deve ter 7 caracteres.';
      return;
    }

    if (this.cliente.idade < 18) {
      this.erroMensagem = 'A idade deve ser maior ou igual a 18 anos.';
      return;
    }

    const contaNumericaRegex = /^[0-9]+$/;
    if (!contaNumericaRegex.test(this.cliente.numeroConta)) {
      this.erroMensagem = 'O número da conta deve conter apenas números.';
      return;
    }


    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(this.cliente.email)) {
      this.erroMensagem = 'O formato do email é inválido.';
      return;
    }


    this.clientesService.cadastrarCliente(this.cliente).subscribe({
      next: (response) => {
        this.sucessoMensagem = 'Cliente cadastrado com sucesso!';
      },
      error: (error) => {
        this.erroMensagem = 'Erro ao cadastrar cliente. Verifique os dados e tente novamente.';
        console.error('Erro ao cadastrar cliente:', error);
      }
    });
  }
}
