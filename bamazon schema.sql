DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity DECIMAL (10,2) NULL,
  PRIMARY KEY (id)
);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bud Light", "NOT-SO alcoholic beverages", 5.0, 500), ("Modelo", "NOT-SO alcoholic beverages", 6.50, 500), ("Heineken", "alcoholic beverages", 6.30, 350), ("Stella Artois", "alcoholic beverages", 6.60, 450), ("Blue Moon", "alcoholic beverages", 7.50, 400), ("Guinness", "alcoholic beverages", 7.00, 300), ("Lagunitas", "alcoholic beverages", 7.50, 450), ("IceHouse", "NOT-SO alcoholic beverages", 5.30, 200), ("Lagunitas", "alcoholic beverages", 7.50, 450), ("Miller", "NOT-SO alcoholic beverages", 4.50, 200);