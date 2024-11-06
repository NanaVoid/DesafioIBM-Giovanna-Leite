package com.desafioibm.desafioibmgiovannaleite.repository;

import com.desafioibm.desafioibmgiovannaleite.jpa.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ClientesRepository extends JpaRepository<Clientes, Long> {
    Optional<Clientes> findByNumeroConta(String numeroConta);
}
