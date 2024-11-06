package com.desafioibm.desafioibmgiovannaleite.service;

import com.desafioibm.desafioibmgiovannaleite.jpa.Clientes;
import com.desafioibm.desafioibmgiovannaleite.jpa.TipoTransacaoEnum;
import com.desafioibm.desafioibmgiovannaleite.jpa.TransacoesBancarias;
import com.desafioibm.desafioibmgiovannaleite.repository.TransacoesBancariasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class TransacoesBancariasService {

    @Autowired
    private TransacoesBancariasRepository transacoesBancariasRepository;

    @Autowired
    private ClientesService clientesService;

    public TransacoesBancarias fazerTransacao(String numeroConta, BigDecimal valor, String tipo) {
        Optional<Clientes> clienteOptional = clientesService.buscarClientesPorNumeroConta(numeroConta);
        if (clienteOptional.isPresent()) {
            Clientes clientes = clienteOptional.get();
            TransacoesBancarias transacoesBancarias = new TransacoesBancarias();
            transacoesBancarias.setClientes(clientes);
            transacoesBancarias.setNumeroConta(numeroConta);
            transacoesBancarias.setValor(valor);
            transacoesBancarias.setTipo(tipo.equals("CD") ? TipoTransacaoEnum.CD : TipoTransacaoEnum.DB);
            return transacoesBancariasRepository.save(transacoesBancarias);
        }
        return null;
    }

    public List<TransacoesBancarias> buscarTransacaoPorNumConta(String numeroConta) {
        return transacoesBancariasRepository.findByNumeroConta(numeroConta);
    }

    public BigDecimal calcularSaldoConta(String numeroConta) {
        List<TransacoesBancarias> transacoes = transacoesBancariasRepository.findByNumeroConta(numeroConta);
        BigDecimal saldo = BigDecimal.ZERO;

        for (TransacoesBancarias transacoesBancarias : transacoes) {
            if (transacoesBancarias.getTipo() == TipoTransacaoEnum.CD) {
                saldo = saldo.add(transacoesBancarias.getValor());
            } else {
                saldo = saldo.subtract(transacoesBancarias.getValor());
            }
        }

        return saldo;
    }
}

