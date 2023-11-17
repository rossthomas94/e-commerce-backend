CREATE DATABASE productInfo;

CREATE TABLE productInfo.Product (
    productId varchar(100) PRIMARY KEY,
    categoryId VARCHAR(255) NOT NULL,
    productName TEXT NOT NULL,
    categoryName TEXT,
    productDescription TEXT,
    image TEXT,
    productPrice DECIMAL(10, 2) NOT NULL,
	inventory_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);