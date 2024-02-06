-- Cria o banco de dados
create database db_MeusLivros;

-- Retorna todas os bancos de dados
SHOW DATABASES;
 
-- Seleciona o banco de dados db_MeusLivros
use db_MeusLivros;
 
-- Retorna o banco de dados selecionado
SELECT DATABASE();
 
-- criar a tabela autor
CREATE TABLE tb_Autores (
IdAutor SMALLINT AUTO_INCREMENT,
NomeAutor VARCHAR(50) NOT NULL,
SobrenomeAutor VARCHAR(60) NOT NULL,
CONSTRAINT pk_id_autor PRIMARY KEY (IdAutor)
);
 
-- Descreve os campos da tabela tb_autores
DESCRIBE tb_autores;
 SHOW COLUMNS FROM tb_autores;
 
-- Criar tabela editoras
create table tb_Editoras (
IdEditora smallint primary key auto_increment,
NomeEditora varchar(50) not null
);
 
-- Criando a tabela assuntos
create table tb_Assuntos (
IdAssunto tinyint auto_increment,
Assunto varchar(25) not null,
constraint pk_id_assunto primary key (IdAssunto)
);
 
-- Criando a tabela livros
create table tb_Livros(
IdLivro smallint not null auto_increment,
NomeLivro varchar(70) not null,
ISBN13 varchar(13) not null,
DataPub date,
PrecoLivro decimal(10,2) not null,
NumeroPaginas smallint not null,
IdEditora smallint not null,
IdAssunto tinyint not null,
constraint pk_id_livro primary key (IdLivro),
CONSTRAINT fk_id_editora FOREIGN KEY (IdEditora) REFERENCES tb_Editoras
(IdEditora) ON DELETE CASCADE,
CONSTRAINT fk_id_assunto FOREIGN KEY (IdAssunto) REFERENCES tb_Assuntos
(IdAssunto) ON DELETE CASCADE
);

use db_meuslivros;
describe tb_livros;
 
Create table tb_LivrosAutores (
IdLivro smallint not null,
IdAutor smallint not null,
constraint pk_id_livro_autor primary key (IdLivro, IdAutor),
constraint fk_id_livros foreign key (idLivro) references tb_Livros (IdLivro),
constraint fk_id_autores foreign key (IdAutor) references tb_Autores (IdAutor)
);
 
-- Mostrar todas as tabelas criadas
 Show tables;
 
 
/*Criar a tabela emprestimo*/
CREATE TABLE Emprestimo (
IdEmprestimo TINYINT PRIMARY KEY,
NomeLivro VARCHAR (60) NOT NULL,
NomeEmprestador VARCHAR (50) NOT NULL,
DataEmprestimo DATE NOT NULL,
Duracao TINYINT NOT NULL );
 
rename table emprestimo to tb_emprestimos;
select * from tb_livros;
alter table tb_livros add Edicao tinyint; -- alteração da tabela tb_livros adiciona a coluna edição com o tipo de formatação tinyint
alter table tb_livros drop column Edicao; -- alteração da table tb_livros apagar coluna Edicao
describe tb_emprestimos; -- itens da tabela emprestivo
alter table tb_emprestimos modify column idemprestimo smallint; -- faz uma modificação em uma coluna na tabela
drop table tb_emprestimos;

INSERT INTO tb_autores (NomeAutor, SobrenomeAutor)
values
('Daniel', 'Barret'),
('Gerald', 'Carter');
 select * from tb_autores;

INSERT INTO tb_autores (NomeAutor, SobrenomeAutor)
values
('Daniel', 'Barret'),
('Gerald', 'Carter'),
('Mark', 'Sobell'),
('William', 'Stanek'), 
('Richard', 'Blum'), 
('Christine', 'Bresnahan'),
('Richard', 'Silverman'),
('Robert', 'Byrnes'), 
('Jay', 'Ts'),
('Robert', 'Eckstein'), 
('Paul', 'Horowitz'), 
('Winfield', 'Hill'),
('Joel', 'Murach'), 
('Paul', 'Scherz'), 
('Simon', 'Monk');
select * from tb_autores;

show tables;

 insert into tb_editoras (NomeEditora)
 values ('Prentice Hall'), ('O Reilly'), ('Microsoft Press'), ('Wiley'), ('Mc Graw Hill'), ('Bookman'), ('Novatec'), ('Apress'), ('sybex'), ('Mike Murach and Associates');
 select * from tb_editoras;
  
 
insert into tb_Assuntos (Assunto)
values
('Ficção'), ('Botânica'),
('Eletrônica'), ('Matemática'),
('Aventura'), ('Literatura'),
('Informática'), ('Suspense');



INSERT INTO tb_Livros (NomeLivro, ISBN13, DataPub, PrecoLivro, NumeroPaginas, IdAssunto, IdEditora)
VALUES
('Linux Command Line and Shell Scripting','9781118983843', '20150109', 165.55, 816, 7, 4),
('SSH, the Secure Shell','9780596008956', '20050517', 295.41, 672, 7, 2),
('Using Samba','9780596002565', '20031221', 158.76, 449, 7, 2),
('A Arte da Eletrônica', '9788582604342', '20170308', 176.71, 1160, 7, 6),
('Windows Server 2012 Inside Out','9780735666313', '20130125', 179.51, 1584, 7, 3),
('Murach´s MySQL','9781943872367', '20190501', 227.64, 650, 7, 10),
('Practical Electronics for Inventors', '9781259587542', '20160711', 119.58, 1056, 3, 5);


select * from tb_livros;

update tb_livros set NomeLivro = 'SSH, o Shell Seguro' where idLivro = 2;
update tb_livros set PrecoLivro = PrecoLivro + 68.90 where idLivro = 1;

select * from tb_assuntos;

-- CUIDADOOOOOOO UPDATE SEM WHERE 
update tb_assuntos set assunto = 'Biologia';
-- TODOS OS ITENS DA tb_ASSUNTOS FORAM ALTERADOS PARA 'BIOLOGIA'

update tb_Assuntos  set Assunto = 'Ficção' where idassunto = 1; 
update tb_Assuntos  set Assunto = 'Botânica' where idassunto = 2; 
update tb_Assuntos  set Assunto = 'Eletrônica' where idassunto = 3; 
update tb_Assuntos  set Assunto = 'Matemática' where idassunto = 4; 
update tb_Assuntos  set Assunto = 'Aventura' where idassunto = 5; 
update tb_Assuntos  set Assunto = 'Literatura' where idassunto = 6; 
update tb_Assuntos  set Assunto = 'Informática' where idassunto = 7; 
update tb_Assuntos  set Assunto = 'Suspense' where idassunto = 8; 

-- UPDADE CORRETO
update tb_assuntos set assunto = 'Biologia' where idassunto = 2; -- atualiza o dado na tabela

select * from tb_editoras;

insert into tb_editoras (nomeeditora) values ('Bóson Editorial'); -- insere o dado na tabela

delete from tb_editoras where IdEditora = 12;

CREATE TABLE tb_emprestimo (
    IdEmprestimo TINYINT PRIMARY KEY,
    NomeLivro VARCHAR(60) NOT NULL,
    NomeEmprestador VARCHAR(50) NOT NULL
);

insert into tb_emprestimo (Idemprestimo, nomelivro, nomeemprestador)
value 
(20 , 'o cortiço', 'joao da silva'),
(21, 'a moreninha', 'Marcos de souza'),
(22, 'macunaíma', 'Ana de Abreu');

select * from tb_emprestimo;

truncate table tb_emprestimo; -- apaga apenas os dados da tabela

drop table tb_emprestimo; -- apaga a tabela


-- de - sa - fiooo --

select * from tb_autores;
insert into tb_autores (IdAutor, NomeAutor, SobrenomeAutor) values
(18, 'Stephen', 'King');

select * from tb_editoras;
insert into tb_editoras (NomeEditora) values
('Scribner');
delete from tb_editoras where NomeEditora like '%Scribner%';

select * from tb_livros;
select * from tb_assuntos;
describe tb_livros;
insert into tb_assuntos (Assunto) values
('Terror');
insert into tb_livros (NomeLivro, ISBN13, DataPub, PrecoLivro, NumeroPaginas, IdEditora, IdAssunto) values
(
'It', 9781501182099, '2017-07-11', 48.74, 1000, (select IdEditora from tb_editoras where nomeeditora = 'Scribner'), (select IdAssunto from tb_assuntos where Assunto = 'Terror')
);
delete from tb_livros where IdLivro = 9; 

delete from tb_editoras where IdEditora = 11; -- apagou em cascata graças o "ON DELETE CASCADE"

delete from tb_autores where NomeAutor = 'stephen';

select * from tb_livros order by NomeLivro asc;

select * from tb_livros order by NomeLivro desc;

select NomeLivro, IdEditora from tb_livros order by IdEditora;

select NomeLivro, PrecoLivro from tb_livros order by PrecoLivro desc;

select NomeLivro, DataPub, IdAssunto from tb_livros order by IdAssunto, NomeLivro;