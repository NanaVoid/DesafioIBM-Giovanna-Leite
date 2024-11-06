package com.desafioibm.desafioibmgiovannaleite.controller;


import com.desafioibm.desafioibmgiovannaleite.jpa.TransacoesBancarias;
import com.desafioibm.desafioibmgiovannaleite.service.TransacoesBancariasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/transacoes")
public class TransacoesController {

    @Autowired
    private TransacoesBancariasService transacoesBancariasService;

    @PostMapping
    public TransacoesBancarias fazerTransacao(@RequestParam String numeroConta,
                                       @RequestParam BigDecimal valor,
                                       @RequestParam String tipo) {
        return transacoesBancariasService.fazerTransacao(numeroConta, valor, tipo);
    }

    @GetMapping("/{numeroConta}")
    public List<TransacoesBancarias> extratoBancario(@PathVariable String numeroConta) {
        return transacoesBancariasService.buscarTransacaoPorNumConta(numeroConta);
    }

    @GetMapping("/saldo/{numeroConta}")
    public BigDecimal saldo(@PathVariable String numeroConta) {
        return transacoesBancariasService.calcularSaldoConta(numeroConta);
    }
}
