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

user/payment/userId route
get
curl --location --request GET 'http://localhost:3000/user/payment/6695bbf8-d81c-4d68-9b60-1c745e94f49d' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'
post
curl --location --request POST 'http://localhost:3000/user/payment/6695bbf8-d81c-4d68-9b60-1c745e94f49d' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d",
    "cardType":"debit",
    "cardNumber":"12345678912345",
    "expirationDate":"01/23",
    "billingPostcode":"PO124DD",
    "cardHolderName":"Ross Thomas",
    "isPrimaryPayment":1,
    "paymentNickname":"Ross"

}'
user/payment/userId/primary
curl --location --request GET 'http://localhost:3000/user/payment/6695bbf8-d81c-4d68-9b60-1c745e94f49d/primary' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'
user/payment/userId/paymentId route
get
curl --location --request GET 'http://localhost:3000/user/payment/6695bbf8-d81c-4d68-9b60-1c745e94f49d/368e599e-8cd2-4bbd-95b8-77516979b6ff' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'
patch
curl --location --request PATCH 'http://localhost:3000/user/payment/6695bbf8-d81c-4d68-9b60-1c745e94f49d/368e599e-8cd2-4bbd-95b8-77516979b6ff' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d",
    "paymentNickname": "tom"
}'
delete
curl --location --request DELETE 'http://localhost:3000/user/payment/6695bbf8-d81c-4d68-9b60-1c745e94f49d/368e599e-8cd2-4bbd-95b8-77516979b6ff' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PersonID" : "6695bbf8-d81c-4d68-9b60-1c745e94f49d"
}'

productManagement/
get 
curl --location --request GET 'http://localhost:3000/productManagement/' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
}'
productManagement/caterogyId
get
curl --location --request GET 'http://localhost:3000/productManagement/cat101' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' 
post
curl --location --request POST 'http://localhost:3000/productManagement/cat101' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "productName": "testProductOme",
    "categoryName": "testCatOne",
    "productDescription":  "this is the first test pruduct enjoy",
    "image": "imageOne.png",
    "productPrice": 1.99,
    "inventory_count": 4
}'

product/productId route
get 
curl --location --request GET 'http://localhost:3000/productManagement/product/266661' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw ''
patch
curl --location --request PATCH 'http://localhost:3000/productManagement/product/266661' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "productPrice": 10.99
}'
delete
curl --location --request DELETE 'http://localhost:3000/productManagement/product/266661' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw ''

/productManagement/product/productId/stock
get
curl --location --request GET 'http://localhost:3000/productManagement/product/271112/stock' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw ''
patch
curl --location --request PATCH 'http://localhost:3000/productManagement/product/271112/stock' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '{
"addStock": 20
}'

/productManagement/productQuery/search
get
curl --location --request GET 'http://localhost:3000/productManagement/productQuery/search' \
--header 'Authorization: Bearer KFhBFsOcR2pAKFB9Y6R0ShqDAKE02qo4' \
--header 'Content-Type: application/json' \
--data-raw '[
{
    "column": "productPrice",
    "operator": ">",
    "value": 5
},
{
    "column": "productPrice",
    "operator": "<",
    "value": 10
}
]'