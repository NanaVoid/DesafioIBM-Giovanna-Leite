package com.desafioibm.desafioibmgiovannaleite.repository;


import com.desafioibm.desafioibmgiovannaleite.jpa.TransacoesBancarias;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TransacoesBancariasRepository extends JpaRepository<TransacoesBancarias, Long> {
    List<TransacoesBancarias> findByNumeroConta(String numeroConta);
}