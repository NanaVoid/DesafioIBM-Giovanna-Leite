# Desafio IBM - Aplicação de Simulação de Transações Bancárias

Este projeto é uma aplicação web que simula transações financeiras de um banco, permitindo cadastro de clientes, operações de crédito e débito, e visualização de extrato de conta.

## Tecnologias Utilizadas
- **Front-End**: Angular
- **Back-End**: Java (Spring Boot)
- **Banco de Dados**: MySQL

## Funcionalidades
- Cadastro de Clientes com nome, idade, endereço, email e número da conta
- Realização de transações de Crédito e Débito
- Exibição de Extrato com saldo total

## Requisitos de Configuração

### Banco de Dados MySQL

1. **Instale o MySQL** se ainda não estiver instalado.
2. Crie um banco de dados e as tabelas necessárias com o script fornecido.

### Configuração do Banco de Dados

1. Abra o MySQL e execute o seguinte comando para criar o banco e tabelas:

    ```bash
    mysql -u root -p < scripts/setup_database.sql
    ```

    - O script `setup_database.sql` está localizado na pasta `scripts` do projeto.
    - Altere o usuário e senha (`root`) se necessário.

### Configuração do `application.properties`

Atualize o arquivo `src/main/resources/application.properties` para conectar ao banco de dados `desafio_ibm`. Exemplo:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/desafio_ibm?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
