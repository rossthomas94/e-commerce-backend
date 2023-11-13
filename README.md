# e-commerce-backend

/users route
Create new user
curl --location --request POST 'http://localhost:3000/users/new' \
--header 'Content-Type: application/json' \
--data-raw '{
"FirstName": "first",
"LastName": "last",
"userName": "userNameTesttest",
"email": "emailemail@email.com",
"password":"Password123",
"DOB": "01012000"
}'

Get all users
curl --location --request GET 'http://localhost:3000/users/' \
--data-raw ''

Login route
curl --location --request POST 'http://localhost:3000/login/emailemail@email.com' \
--header 'Content-Type: application/json' \
--data-raw '{"password" : "Password123"}'

/user route
get user info 
curl --location --request GET 'http://localhost:3000/user/6695bbf8-d81c-4d68-9b60-1c745e94f49d' \
--header 'Authorization: Bearer XtjNW4Y444oDZSJnLQsVE2GFWtSzNvBo' \
--header 'Content-Type: application/json' \
--data-raw '{ "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"}'

Update user info
curl --location --request PATCH 'http://localhost:3000/user/6695bbf8-d81c-4d68-9b60-1c745e94f49d' \
--header 'Authorization: Bearer XtjNW4Y444oDZSJnLQsVE2GFWtSzNvBo' \
--header 'Content-Type: application/json' \
--data-raw '{
"PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d",
"FirstName": "newFirstName"}'

Delete user
curl --location --request DELETE 'http://localhost:3000/user/6695bbf8-d81c-4d68-9b60-1c745e94f49d' \
--header 'Authorization: Bearer XtjNW4Y444oDZSJnLQsVE2GFWtSzNvBo' \
--header 'Content-Type: application/json' \
--data-raw '{"PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"}'

user/address route
Get
Post
curl --location --request POST 'http://localhost:3000/user/address/6695bbf8-d81c-4d68-9b60-1c745e94f49d' \
--header 'Authorization: Bearer XtjNW4Y444oDZSJnLQsVE2GFWtSzNvBo' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d",
    "houseNumber": "123",
    "streetName": "StreetName",
    "city": "city",
    "postcode": "PC13DR",
    "isPrimaryAddress": 0,
    "addressNickname": "Home"
}'
Patch
Delete