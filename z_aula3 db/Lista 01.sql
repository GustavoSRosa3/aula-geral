-- Exercício 1
create database dbVendas;
SHOW DATABASES;
use dbVendas;
-- drop database dbVendas;
  
-- Exercício 2
CREATE TABLE tbProduto (
Codigo_Produto integer primary key,
Descricao_Produto VARCHAR(30),
Preco_produto float
);
select * from tbProduto;

-- Exercício 3
CREATE TABLE tbNota_Fiscal (
Numero_NF integer primary key,
Data_NF date,
Valor_NF float
);
select * from tbNota_Fiscal;

-- Exercício 4
CREATE TABLE tbItens (
Cod_Item integer primary key,
Num_Item integer,
Qtde_Item integer,
Produto_Codigo_Produto integer,
Nota_fiscal_Numero_NF integer,
CONSTRAINT fk_id_ProdutoCodigoProduto FOREIGN KEY (Produto_Codigo_Produto) REFERENCES tbProduto (Codigo_Produto),
CONSTRAINT fk_id_NotafiscalNumeroNF FOREIGN KEY (Nota_fiscal_Numero_NF) REFERENCES tbNota_Fiscal (Numero_NF)
);
select * from tbItens;

-- Exercício 5
alter table tbProduto modify column Descricao_Produto varchar(50);
select * from tbProduto;

-- Exercício 6 
drop table tbItens;
drop table tbNota_Fiscal;
select * from tbItens;

CREATE TABLE tbNota_Fiscal (
Numero_NF integer primary key,
ICMS float,
Data_NF date,
Valor_NF float
);

CREATE TABLE tbItens (
Cod_Item integer primary key,
Num_Item integer,
Qtde_Item integer,
Produto_Codigo_Produto integer,
Nota_fiscal_Numero_NF integer,
CONSTRAINT fk_id_ProdutoCodigoProduto FOREIGN KEY (Produto_Codigo_Produto) REFERENCES tbProduto (Codigo_Produto),
CONSTRAINT fk_id_NotafiscalNumeroNF FOREIGN KEY (Nota_fiscal_Numero_NF) REFERENCES tbNota_Fiscal (Numero_NF)
);
select * from tbNota_Fiscal;

-- Exercício 7
alter table tbProduto add Peso float;
select * from tbProduto;

-- Exercício 8
drop table tbItens;
drop table tbNota_Fiscal;
drop table tbProduto;

CREATE TABLE tbProduto (
Codigo_Produto integer primary key,
Descricao_Produto VARCHAR(50),
Preco_produto float,
Peso float
);
select * from tbProduto;

CREATE TABLE tbNota_Fiscal (
Numero_NF integer primary key,
ICMS float,
Data_NF date,
Valor_NF float
);

CREATE TABLE tbItens (
-- Cod_Item integer primary key,
Num_Item integer primary key,
Qtde_Item integer,
Produto_Codigo_Produto integer,
Nota_fiscal_Numero_NF integer,
CONSTRAINT fk_id_ProdutoCodigoProduto FOREIGN KEY (Produto_Codigo_Produto) REFERENCES tbProduto (Codigo_Produto),
CONSTRAINT fk_id_NotafiscalNumeroNF FOREIGN KEY (Nota_fiscal_Numero_NF) REFERENCES tbNota_Fiscal (Numero_NF)
);
select * from tbNota_Fiscal;

-- Exercício 9
DESCRIBE tbProduto;

-- Exercício 10
DESCRIBE tbNota_Fiscal;

-- Exercício 11
ALTER TABLE tbNota_Fiscal
CHANGE Valor_NF ValorTotal_NF float;
select * from tbNota_Fiscal;

-- Exercício 12
alter table tbNota_Fiscal drop column Data_NF;
select * from tbNota_Fiscal;

-- Exercício 13
drop table tbItens;

-- Exercício 14
drop table tbNota_Fiscal;
 
CREATE TABLE tbNota_Fiscal (
Numero_NF integer primary key,
ICMS float,
ValorTotal_NF float
);
select * from tbNota_Fiscal;
 
