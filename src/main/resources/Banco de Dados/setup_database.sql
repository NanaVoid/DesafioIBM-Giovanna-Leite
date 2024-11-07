CREATE DATABASE IF NOT EXISTS desafio_ibm CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;


USE desafio_ibm;

CREATE TABLE `clientes` (
                            `id` bigint NOT NULL AUTO_INCREMENT,
                            `nome` varchar(255) DEFAULT NULL,
                            `idade` int NOT NULL,
                            `email` varchar(255) DEFAULT NULL,
                            `numero_conta` varchar(7) DEFAULT NULL,
                            `endereco` varchar(255) DEFAULT NULL,
                            PRIMARY KEY (`id`),
                            UNIQUE KEY `numero_conta` (`numero_conta`),
                            UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `transacoes` (
                              `id` int NOT NULL AUTO_INCREMENT,
                              `tipo` enum('CD','DB') NOT NULL,
                              `valor` decimal(10,2) NOT NULL,
                              `data` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
                              `numero_conta` varchar(7) DEFAULT NULL,
                              PRIMARY KEY (`id`),
                              KEY `fk_cliente_conta` (`numero_conta`),
                              CONSTRAINT `fk_cliente_conta` FOREIGN KEY (`numero_conta`) REFERENCES `clientes` (`numero_conta`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



