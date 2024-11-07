package com.desafioibm.desafioibmgiovannaleite.repository;


import com.desafioibm.desafioibmgiovannaleite.jpa.Transacoes;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TransacoesRepository extends JpaRepository<Transacoes, Long> {
    List<Transacoes> findByNumeroConta(String numeroConta);
}