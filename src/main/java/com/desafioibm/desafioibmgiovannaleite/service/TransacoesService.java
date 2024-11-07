package com.desafioibm.desafioibmgiovannaleite.service;

import com.desafioibm.desafioibmgiovannaleite.jpa.Clientes;
import com.desafioibm.desafioibmgiovannaleite.jpa.TipoTransacaoEnum;
import com.desafioibm.desafioibmgiovannaleite.jpa.Transacoes;
import com.desafioibm.desafioibmgiovannaleite.repository.TransacoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
@Service
public class TransacoesService {

    @Autowired
    private TransacoesRepository transacoesRepository;

    @Autowired
    private ClientesService clientesService;


    public Transacoes fazerTransacao(String numeroConta, BigDecimal valor, String tipo) {
        Optional<Clientes> clienteOptional = clientesService.buscarClientesPorNumeroConta(numeroConta);
        if (clienteOptional.isPresent()) {
            Clientes clientes = clienteOptional.get();

            if (verificarDadosCliente(clientes.getNumeroConta(), clientes.getEmail(), clientes.getNome())) {
                Transacoes transacoes = new Transacoes();
                transacoes.setClientes(clientes);
                transacoes.setNumeroConta(numeroConta);
                transacoes.setValor(valor);
                transacoes.setTipo(tipo.equals("CD") ? TipoTransacaoEnum.CD : TipoTransacaoEnum.DB);
                return transacoesRepository.save(transacoes);
            } else {
                return null;
            }
        }
        return null;
    }


    public boolean verificarDadosCliente(String numeroConta, String email, String nome) {
        Optional<Clientes> clienteOptional = clientesService.buscarClientesPorNumeroConta(numeroConta);
        if (clienteOptional.isPresent()) {
            Clientes cliente = clienteOptional.get();
            return cliente.getNome().equals(nome) && cliente.getEmail().equals(email);
        }
        return false;
    }


    public List<Transacoes> buscarTransacaoPorNumConta(String numeroConta) {
        return transacoesRepository.findByNumeroConta(numeroConta);
    }


    public BigDecimal calcularSaldoConta(String numeroConta) {
        List<Transacoes> transacoes = transacoesRepository.findByNumeroConta(numeroConta);
        BigDecimal saldo = BigDecimal.ZERO;

        for (Transacoes transacoesBancarias : transacoes) {
            if (transacoesBancarias.getTipo() == TipoTransacaoEnum.CD) {
                saldo = saldo.add(transacoesBancarias.getValor());
            } else {
                saldo = saldo.subtract(transacoesBancarias.getValor());
            }
        }

        return saldo;
    }
}
