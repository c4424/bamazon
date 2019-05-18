DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity DECIMAL (10,2) NULL,
  PRIMARY KEY (item_id)
);



INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (120, "Bud Light", "NOT-SO alcoholic beverages", 5.0, 500), (121, "Modelo", "NOT-SO alcoholic beverages", 6.50, 500), (122, "Heineken", "alcoholic beverages", 6.30, 350), (123, "Stella Artois", "alcoholic beverages", 6.60, 450), (124, "Blue Moon", "alcoholic beverages", 7.50, 400), (125, "Guinness", "alcoholic beverages", 7.00, 300), (126, "Lagunitas", "alcoholic beverages", 7.50, 450), (127, "IceHouse", "NOT-SO alcoholic beverages", 5.30, 200), (128, "Lagunitas", "alcoholic beverages", 7.50, 450), (129, "Miller", "NOT-SO alcoholic beverages", 4.50, 200);
SELECT*FROM products;