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

  sucessoMensagem: string = '';  // Variável para mensagem de sucesso
  erroMensagem: string = '';     // Variável para mensagem de erro

  constructor(private clientesService: ClientesService) {}

  cadastrarCliente() {
    this.sucessoMensagem = '';
    this.erroMensagem = '';


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
