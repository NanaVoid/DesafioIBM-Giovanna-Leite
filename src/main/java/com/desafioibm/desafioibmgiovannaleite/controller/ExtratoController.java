package com.desafioibm.desafioibmgiovannaleite.controller;

import com.desafioibm.desafioibmgiovannaleite.jpa.Transacoes;
import com.desafioibm.desafioibmgiovannaleite.service.ExtratoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/extrato")
public class ExtratoController {

    @Autowired
    private ExtratoService extratoService;


    @GetMapping("saldo/{numeroConta}")
    public BigDecimal saldo(@PathVariable String numeroConta) {
        return extratoService.calcularSaldoConta(numeroConta);
    }

    @GetMapping("/verificar-dados")
    public boolean verificarDados(@RequestParam String numeroConta,
                                  @RequestParam String email,
                                  @RequestParam String nome) {
        return extratoService.verificarDadosCliente(numeroConta, email, nome);
    }

    @GetMapping("extrato/{numeroConta}")
    public List<Transacoes> extrato(@PathVariable String numeroConta) {
        return extratoService.obterExtrato(numeroConta);
    }
}
