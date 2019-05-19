DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (item_id)
);



INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (120, "Bud Light", "NOT-SO alcoholic beverages", 5.0, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (121, "Modelo", "NOT-SO alcoholic beverages", 6.50, 500); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(122, "Heineken", "alcoholic beverages", 6.30, 350); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (123, "Stella Artois", "alcoholic beverages", 6.60, 450);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(124, "Blue Moon", "alcoholic beverages", 7.50, 400); 

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (125, "Guinness", "alcoholic beverages", 7.00, 300)

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (126, "Lagunitas", "alcoholic beverages", 7.50, 450);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (127, "IceHouse", "NOT-SO alcoholic beverages", 5.30, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(128, "Lagunitas", "alcoholic beverages", 7.50, 450);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(129, "Miller", "NOT-SO alcoholic beverages", 4.50, 200);

SELECT*FROM products;