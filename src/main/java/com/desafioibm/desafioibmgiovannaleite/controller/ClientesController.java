package com.desafioibm.desafioibmgiovannaleite.controller;

import com.desafioibm.desafioibmgiovannaleite.jpa.Clientes;
import com.desafioibm.desafioibmgiovannaleite.service.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clientes")
public class ClientesController {

    @Autowired
    private ClientesService clientesService;

    @PostMapping
    public Clientes cadastrarCliente(@RequestBody Clientes clientes) {
        return clientesService.salvarClientes(clientes);
    }
}