

# Project Description 

- This is a watch e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse, select, and purchase watches. 
- The platform also includes marketing features to enhance customer engagement. 
- Designed for a seamless and consistent shopping experience, it caters to customers who prefer single-platform shopping.

# This is all api endpoints

## Authentication Routes
- POST /api/v1/auth/register – Register a new user
- POST /api/v1/auth/login – User login
- POST /api/v1/auth/logout – User logout
- GET /api/v1/auth/profile – Get user profile
- PUT /api/v1/auth/update-profile – Update user profile

## Category Routes
- POST /api/v1/category/create – Create a new category
- GET /api/v1/category – Get all categories
- GET /api/v1/category/:slug– Get a single category by ID
- PUT /api/v1/category/:slug– Update a category by ID
- DELETE /api/v1/category/:slug – Delete a category by ID

## Product Routes 
- POST /api/v1/product/create – Create a new product (watch)
- GET /api/v1/product – Get all products
- GET /api/v1/product/:slug – Get a single product by ID
- PUT /api/v1/product/:slug – Update a product by ID
- DELETE /api/v1/product/:slug – Delete a product by ID
- GET /api/v1/product/category/:categoryId – Get products by category
- GET /api/v1/product/search?q=watchname – Search products by name


# for Admin  
- user: admin@gmail.com
- password: 1234

# for User
- user: user@gmail.com
- password: 123456789

- And to see dashboard for user and admin select dashboard in user and admin profile
