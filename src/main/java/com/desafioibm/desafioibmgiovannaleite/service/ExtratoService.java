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
public class ExtratoService {

    @Autowired
    private TransacoesRepository transacoesRepository;

    @Autowired
    private ClientesService clientesService;

    public boolean verificarDadosCliente(String numeroConta, String email, String nome) {
        Optional<Clientes> clienteOptional = clientesService.buscarClientesPorNumeroConta(numeroConta);
        if (clienteOptional.isPresent()) {
            Clientes cliente = clienteOptional.get();
            return cliente.getNome().equals(nome) && cliente.getEmail().equals(email);
        }
        return false;
    }

    public List<Transacoes> obterExtrato(String numeroConta) {
        return transacoesRepository.findByNumeroConta(numeroConta);
    }

    public BigDecimal calcularSaldoConta(String numeroConta) {
        List<Transacoes> transacoes = transacoesRepository.findByNumeroConta(numeroConta);
        BigDecimal saldo = BigDecimal.ZERO;

        for (Transacoes transacao : transacoes) {
            if (transacao.getTipo() == TipoTransacaoEnum.CD) {
                saldo = saldo.add(transacao.getValor());
            } else if (transacao.getTipo() == TipoTransacaoEnum.DB) {
                saldo = saldo.subtract(transacao.getValor());
            }
        }

        return saldo;
    }
}
