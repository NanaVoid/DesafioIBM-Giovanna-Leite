package com.desafioibm.desafioibmgiovannaleite.controller;

import com.desafioibm.desafioibmgiovannaleite.jpa.Clientes;
import com.desafioibm.desafioibmgiovannaleite.service.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/clientes")
public class ClientesController {

    @Autowired
    private ClientesService clientesService;

    @PostMapping
    public ResponseEntity<Clientes> cadastrarCliente(@RequestBody Clientes clientes) {
        Clientes novoCliente = clientesService.salvarClientes(clientes);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCliente);
    }
}