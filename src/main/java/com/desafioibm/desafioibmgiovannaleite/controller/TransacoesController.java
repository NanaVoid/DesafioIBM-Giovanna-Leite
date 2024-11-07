package com.desafioibm.desafioibmgiovannaleite.controller;


import com.desafioibm.desafioibmgiovannaleite.jpa.Transacoes;
import com.desafioibm.desafioibmgiovannaleite.service.ClientesService;
import com.desafioibm.desafioibmgiovannaleite.service.TransacoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/transacoes")
public class TransacoesController {

    @Autowired
    private TransacoesService transacoesService;

    @Autowired
    private ClientesService clientesService;


    @PostMapping
    public Transacoes fazerTransacao(@RequestParam String numeroConta,
                                     @RequestParam BigDecimal valor,
                                     @RequestParam String tipo) {
        return transacoesService.fazerTransacao(numeroConta, valor, tipo);
    }


    @GetMapping("/saldo/{numeroConta}")
    public BigDecimal saldo(@PathVariable String numeroConta) {
        return transacoesService.calcularSaldoConta(numeroConta);
    }


    @GetMapping("/verificar-dados")
    public boolean verificarDados(@RequestParam String numeroConta,
                                  @RequestParam String email,
                                  @RequestParam String nome) {
        return transacoesService.verificarDadosCliente(numeroConta, email, nome);
    }
}

