DROP KEYSPACE IF EXISTS cbd_ex4;
CREATE KEYSPACE cbd_ex4 WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE cbd_ex4;



CREATE TABLE IF NOT EXISTS users (
    user_id int,
    name TEXT,
    email TEXT,
    addresses MAP<TEXT, TEXT>,  
    created_at TIMESTAMP,
    PRIMARY KEY (user_id)
);


CREATE TABLE IF NOT EXISTS products (
    product_id int,
    name TEXT,
    description TEXT,
    price DECIMAL,
    categories SET<TEXT>,
    created_at TIMESTAMP,
    PRIMARY KEY (product_id)
);


CREATE TABLE IF NOT EXISTS orders (
    order_id int,
    user_id int,
    product_ids LIST<int>, 
    order_date TIMESTAMP,
    total_price DECIMAL,
    PRIMARY KEY (order_id)
);


CREATE TABLE IF NOT EXISTS reviews (
    review_id int,
    product_id int,
    user_id int,
    rating INT,
    comment TEXT,
    created_at TIMESTAMP,
    PRIMARY KEY (review_id)
);


CREATE TABLE IF NOT EXISTS shopping_carts (
    cart_id int,
    user_id int,
    product_ids SET<int>,  
    updated_at TIMESTAMP,
    PRIMARY KEY (cart_id)
);

CREATE INDEX IF NOT EXISTS ON users(name);
CREATE INDEX IF NOT EXISTS ON users(addresses);
CREATE INDEX IF NOT EXISTS ON products(name);
CREATE INDEX IF NOT EXISTS ON products(categories);
CREATE INDEX IF NOT EXISTS ON orders(user_id);
CREATE INDEX IF NOT EXISTS ON orders(product_ids);
CREATE INDEX IF NOT EXISTS ON reviews(product_id);
CREATE INDEX IF NOT EXISTS ON reviews(user_id);
CREATE INDEX IF NOT EXISTS ON reviews(rating);
CREATE INDEX IF NOT EXISTS ON shopping_carts(user_id);
CREATE INDEX IF NOT EXISTS ON shopping_carts(product_ids);
CREATE INDEX IF NOT EXISTS ON orders(total_price);
CREATE INDEX IF NOT EXISTS ON users(email);