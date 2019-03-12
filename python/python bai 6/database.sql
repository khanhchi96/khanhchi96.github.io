CREATE DATABASE chi 
CREATE TABLE Products(
    productId SERIAl PRIMARY KEY,
    productName VARCHAR,
    year INT
);
INSERT INTO Products(productName, year) VALUES('iphoneX', 2018)
SELECT * from Products;