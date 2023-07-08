CREATE DATABASE userInfo;

CREATE TABLE userInfo.user (
    PersonID varchar(100),
    LastName varchar(100),
    FirstName varchar(100),
    email VARCHAR(255),
    userName varchar(100),
    password varchar(100),
    DOB varchar(100),
    addressExists BOOLEAN,
    paymentExists BOOLEAN,
    status varchar(10),
    createdAt DATETIME,
    modifiedAt DATETIME,
    deletedAccount BOOLEAN
);


CREATE TABLE userInfo.userAddress (
addressId varchar(100),
  PersonID varchar(100),
  houseNumber VARCHAR(50) NOT NULL,
  streetName VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  postcode VARCHAR(10),
  insertedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  isPrimaryAddress BOOLEAN NOT NULL DEFAULT 0,
  addressNickname VARCHAR(100),
);