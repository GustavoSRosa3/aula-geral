create database olamundo2; -- criar base de dados
drop database olamundo2; -- excluir base de dados
show databases; -- visualizar base de dados
create schema sucos; -- criar base de dados
use sucos; -- ativar o banco de dados

create table tbcliente -- nome da tabela
( cpf varchar (11), -- campos da tabela, tipo de informação e quantidade de caracteres
nome varchar (100), -- campos da tabela, tipo de informação e quantidade de caracteres
endereco varchar (150), -- campos da tabela, tipo de informação e quantidade de caracteres
idade smallint); -- campos da tabela, tipo de informação e quantidade de caracteres

create table tbfuncionario 
( cpf varchar (11), 
nome varchar (100), 
endereco varchar (150), 
idade smallint); 

show tables; -- visualizar as tabelas

drop table tbfuncionario;
drop table tbcliente;

-- delete serve para dados, para apagar tabelas é o drop

select * from tbcliente WHERE CPF = 48812576738;

INSERT INTO tbcliente (cpf, nome, endereco1, idade) VALUES ('48812576736', 'jair', 'brasilia', '55');
INSERT INTO tbcliente (cpf, nome, endereco1, idade) VALUES ('48812576737', 'lula', 'brasilia', '65');
INSERT INTO tbcliente (cpf, nome, endereco1, idade) VALUES ('48812576738', 'ciro', 'brasilia', '49');
INSERT INTO tbcliente (cpf, nome, endereco1, idade) VALUES ('48812576739', 'simone', 'brasilia', '51');
INSERT INTO tbcliente (cpf, nome, endereco1, idade) VALUES ('48812576740', 'soraya', 'brasilia', '47');

RENAME TABLE tbfuncionario.table TO novatabela.table;

create table tbcliente 
( CPF varchar (11), 
NOME varchar (100), 
ENDERECO1 varchar (150), 
ENDERECO2 smallint,
BAIRRO varchar (50),
CIDADE varchar (50),
ESTADO varchar (50),
CEP varchar (8),
IDADE smallint,
SEXO varchar (1),
LIMITE_CREDITO FLOAT,
VOLUME_COMPRA FLOAT,
PRIMEIRA_COMPRA BIT); 

SHOW TABLEs;

select * from tbcliente WHERE CPF = 48812576738;

delete from tbcliente where name like '%lula%';





