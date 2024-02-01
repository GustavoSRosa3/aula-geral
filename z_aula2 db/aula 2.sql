/*create database olamundo2; -- criar banco de dados
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
*/


create database db_MeusLivros; -- criar banco de dados
show databases; -- retorna todos os bancos de dados
use db_MeusLivros; -- seleciona o banco de dados db_MeusLivros
select database(); -- retorna o banco de dados selecionado, mostra o banco de dados que está ativa para mudanças

-- criar tabela autores
create table tb_autores
(
IdAutor smallint auto_increment, -- smallint = inteiro pequeno; auto_increment = criar sequencias
NomeAutor varchar(50) not null,  -- not null = não pode ser nulo
SobrenomeAutor varchar(60) not null,
constraint pk_id_autor primary key (IdAutor) -- constraint pk_id_autor primary key (IdAutor) = cria e declara a chave primaria
);
select * from tb_autores;

-- descreve os campos da tabela
describe tb_autores;
show columns from tb_autores;

-- criar tabela editoras
create table tb_editoras
(
IdEditora smallint primary key auto_increment, -- primary key = pode ser declarado direto dessa forma ao inves de usar o constraint
NomeEditora varchar(50) not null
);
select * from tb_editoras;

-- criar tabela assuntos
create table tb_assuntos
(
IdAssunto tinyint auto_increment, -- tinyint = pequeno inteiro
Assunto varchar(25) not null,
constraint pk_id_assunto primary key (IdAssunto)
);
select * from tb_assuntos;

-- criar tabela livros
create table tb_livros
(
IdLivro smallint not null auto_increment,
NomeLivro varchar(70) not null,
ISBN13 varchar(13) not null,
DataPub date,
PrecoLivro decimal(10,2) not null,
NumeroPaginas smallint not null,
IdEditora smallint not null,
IdAssunto tinyint not null,
constraint pk_id_livro primary key (IdLivro),
CONSTRAINT fk_id_editora FOREIGN KEY (IdEditora) references tb_editoras (IdEditora) 
on delete cascade, 
CONSTRAINT fk_id_assunto FOREIGN KEY (IdAssunto) references tb_assuntos (IdAssunto) -- CONSTRAINT fk_id_editora FOREIGN KEY (IdEditora) references tb_editoras (IdEditora) = cria uma chave estrangeira, declara a chace e referencia a tabela
on delete cascade -- se deletar a FK nessa tabela, deleta na tabela base dele tbm
);
select * from tb_livros;

-- criar tabela editoras
create table tb_editoras
(
IdEditora smallint primary key auto_increment,
NomeEditora varchar(50) not null
);
select * from tb_editoras;
