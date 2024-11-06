package com.desafioibm.desafioibmgiovannaleite.service;

import com.desafioibm.desafioibmgiovannaleite.jpa.Clientes;
import com.desafioibm.desafioibmgiovannaleite.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClientesService {

    @Autowired
    private ClientesRepository clientesRepository;

    public Clientes salvarClientes(Clientes clientes) {
        return clientesRepository.save(clientes);
    }

    public Optional<Clientes> buscarClientesPorNumeroConta(String numeroConta) {
        return clientesRepository.findByNumeroConta(numeroConta);
    }
}