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