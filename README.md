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

user/address/userId route
Get
curl --location --request GET 'http://localhost:3000/user/address/6695bbf8-d81c-4d68-9b60-1c745e94f49d' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'
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
user/address/userId/primary route
get
curl --location --request GET 'http://localhost:3000/user/address/6695bbf8-d81c-4d68-9b60-1c745e94f49d/primary' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'
user/address/userId/addressId route
get
curl --location --request GET 'http://localhost:3000/user/address/6695bbf8-d81c-4d68-9b60-1c745e94f49d/dfe10e81-273b-48fd-bcac-56b23cd42317' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'
patch
curl --location --request PATCH 'http://localhost:3000/user/address/6695bbf8-d81c-4d68-9b60-1c745e94f49d/dfe10e81-273b-48fd-bcac-56b23cd42317' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d",
    "city": "rename city",
    "addressNickname" : "Mums"
}'
delete
curl --location --request DELETE 'http://localhost:3000/user/address/6695bbf8-d81c-4d68-9b60-1c745e94f49d/0a765140-b1fa-4d6f-8059-76d15afc7732' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'
