DROP DATABASE IF EXISTS bamazonDB;
--creates a database --
CREATE database bamazonDB;
USE bamazonDB;

--creates an invetory table for bamazonDB--
CREATE TABLE inventory (
  position INT NOT NULL,
  brand VARCHAR(100) NULL,
  price DECIMAL (10,2) NULL,
  stock DECIMAL (10,2) NULL,
  PRIMARY KEY (inventory)
);

SELECT * FROM inventory;
