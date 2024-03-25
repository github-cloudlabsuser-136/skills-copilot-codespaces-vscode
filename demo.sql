-- create a table for 5 products with the product names and prices
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10, 2)
);

-- insert some data into the products table
INSERT INTO products (name, price) VALUES ('Apple', 1.00);
INSERT INTO products (name, price) VALUES ('Banana', 0.50);
INSERT INTO products (name, price) VALUES ('Cherry', 2.00);
INSERT INTO products (name, price) VALUES ('Date', 1.50);
INSERT INTO products (name, price) VALUES ('Elderberry', 3.00);
