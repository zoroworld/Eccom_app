# npm init -y
# add in package json
# go website npmjs
# install express and colors
# use nodemon
# If you not want to see require syntax the use 
- Note
  - when you make ES6 or later then use it

        write type down main in package json
        - "type": "module",

        in index.js
        
        import colors from "colors";
        import express  from "express";

-Note 
  - In developer mode we dont want to expose the many secret thing so we put all thinf in .env file
# install dotenv
Note: we dont give path because it is in root dontenv.config();

# install morgan
Note:- which api got hit

# mongodb in sell installation

## 1.  sudo apt-get update
## 2.  download the wget https://downloads.mongodb.com/compass/mongodb-mongosh_1.9.1_amd64.deb or maually download
## 3.  sudo dpkg -i mongodb-mongosh_1.9.1_amd64.deb
## 4. mongod command you see path setup
## 5. mongod path setup
   - find path
      - etc/mongodb.conf
        -   change in dbpath=/var/lib/mongodb/
   - Go to /var/lib/mongodb/
       - put folder data/ folder db
## 6. mongod
## 7. service mongodb start  // to start
## 8. then use command 'mongo' to start
## 9. after open mongo write "use dbs"
## 10. to stop mongodb use 'service mongodb stop'

# mongodv compass installation 

## 1. wget https://downloads.mongodb.com/compass/mongodb-compass_1.37.0_amd64.deb

## 2. sudo dpkg -i mongodb-compass_1.37.0_amd64.deb 

## 3. service mongodb start 

# Make mongodb Atlas cloud based

## 1. Go mongodb
## 2. Then go to sign in open it
## 3. created shared aws database (Note: ony one free cluster we make) dont have money for dedicated
## 4. one database resume cluster0 Click browse collection
## 5. create database -> eccomerce and collection -> users
## 6. Then get the database access create user name and password
## 7. go network access create whitelist 0.0.0.0/0 (Note: don't put current address)
## 8. Go database and connect get url copy
## 9. Then open mongodb compass she mongodb + sv paste in url: mongodb+srv://adminrole:Sh5GBGr4FT4D0ibW@cluster0.jwbjhjn.mongodb.## 10. come to .env and make

    MONGO_URL = mongodb+srv://adminrole:Sh5GBGr4FT4D0ibW@cluster0.jwbjhjn.mongodb.net/eccomerce

## 11. when all is done simply logout from the mongodb Atlas because ours database is done.

# create folder structure
  
  - 1. create config --> db.js --> In that connect database
  - 2. go to server ake connection of data base and add morgan for middleware
  - 3. create more folder
       - controllers
       - helpers
       - middlewares
       - modals
       - routes
  - 4. Create a file in modals --> userModal.js (write a code) --> databse schema
  - 5. then create a routes to sechma --> folder routes --> 

# Create Route and Controller to create token anf validation

## write code in authRoute
## write code in authcontroller in controller
## write code in authroutes in server.js
## Create file in helper folder authhelper.js
## write code in authController
## we write authController in client side and backend and both place will secure.
## always take url of mangodb and paste create cluster
## Using npm packageof jsonwebtoken => to get token => in authcontrolller
## the see the token generate

# To protect route and token we need middleware and protect user

## create authMiddleware in middleware
## make test case using controller and route the use postman to see its protected or not
## postman give key: authorized and value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlkYzM2ZmJjYzEwZmYxMTA5NzgxZTEiLCJpYXQiOjE2ODgwNjA5ODEsImV4cCI6MTY4ODY2NTc4MX0.0sGrYY227jzQWWYSfs_Smt7DOsCeJI0XLClo3aU-IBI

      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlkYzM2ZmJjYzEwZmYxMTA5NzgxZTEiLCJpYXQiOjE2ODgwNjA5ODEsImV4cCI6MTY4ODY2NTc4MX0.0sGrYY227jzQWWYSfs_Smt7DOsCeJI0XLClo3aU-IBI"
##
# Create protect route for Admin also
## set role to get admin access
# React work start but we use Next(React frame work)

{
  "name": "eccomerce_website",
  "version": "1.0.0",
  "description": "eccomerce rest api",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix ./var/task/client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "keywords": [],
  "author": "Techinfo",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "braintree": "^3.16.0",
    "colors": "^1.4.0",
    "concurrently": "^8.2.0",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "express-formidable": "^1.2.0",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.3.0",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.22",
    "slugify": "^1.6.6"
  }
}

