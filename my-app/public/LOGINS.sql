CREATE DATABASE WEBPAGE;
GO

USE WEBPAGE;
GO

CREATE TABLE USERS
(EMAIL varchar(30) unique,
Pword varchar (20) not null,
First_Name varchar(20), 
Last_Name varchar(30) not null, 
);
GO

INSERT INTO USERS (EMAIL, Pword, First_Name ,Last_Name)
VALUES('john.smith@yahoo.co.uk', 'Smith01', 'John', 'Smith')
GO

Select * from USERS
