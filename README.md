# 🚀 Full-Stack E-Commerce Project Setup

This document explains the complete setup and project structure for building a **MERN + Next.js** application.  
It covers **environment setup, database connection, folder structure, middleware, authentication, and API design**.

---

## 📦 Project Initialization

1. Initialize project with **npm**:
   ```bash
   npm init -y

Add configuration in package.json:

To use ES6+ imports, include:

"type": "module"


Install dependencies:

npm install express colors
npm install --save-dev nodemon


Developer convenience:

Use nodemon to auto-restart server.

Store sensitive information in .env file.

🔐 Environment Variables

Install dotenv:

npm install dotenv


In development, load env config:

dotenv.config();


Example .env file:

PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/eccomerce
JWT_SECRET=your_secret_key

📑 Middlewares

morgan – to log requests:

npm install morgan


dotenv – for environment variables.

jsonwebtoken – for secure authentication.

🗄️ MongoDB Setup
Local Installation

Update system: sudo apt-get update

Download Mongo Shell (mongosh) .deb package.

Install with sudo dpkg -i <package>.deb.

Configure mongod service and DB path (/var/lib/mongodb/).

Start service:

service mongodb start


Stop service:

service mongodb stop

MongoDB Compass

Download Compass .deb package.

Install with sudo dpkg -i <package>.deb.

Connect with local/Atlas Mongo instance.

MongoDB Atlas (Cloud)

Create free shared cluster on Atlas.

Create a database:

Name: eccomerce

Collection: users

Configure Database Access → Create user (username + password).

Configure Network Access → Whitelist 0.0.0.0/0.

Get connection string:

mongodb+srv://<username>:<password>@cluster0.mongodb.net/eccomerce


Save it in .env as MONGO_URL.

📂 Folder Structure
project-root/
│── config/
│    └── db.js          # Database connection
│
│── controllers/        # Business logic (e.g., authController.js)
│── helpers/            # Utility functions (e.g., authHelper.js)
│── middlewares/        # Middleware (e.g., authMiddleware.js)
│── models/             # MongoDB schemas (e.g., userModel.js)
│── routes/             # Express routes (e.g., authRoutes.js)
│── server.js           # Main entry point
│── .env                # Environment variables
│── package.json

🔑 Authentication & Authorization
Token Generation

Use jsonwebtoken to issue tokens upon user login/registration.

Token is stored on client side.

Token is required for protected routes.

Protecting Routes

Middleware verifies JWT before allowing access.

If valid → allow user.

If invalid/expired → deny access.

Admin Access

Users have roles (user, admin).

Middleware checks for role before granting admin privileges.

🧪 API Design (No Code)
Auth Routes

POST /api/auth/register → Register user.

POST /api/auth/login → Login & get token.

GET /api/auth/profile → Get logged-in user profile (Protected).

GET /api/auth/admin → Admin-only route (Protected).

User Routes

GET /api/users → Get all users (Admin only).

PUT /api/users/:id → Update user details.

DELETE /api/users/:id → Delete user.

Product Routes

POST /api/products → Add new product (Admin only).

GET /api/products → Get all products.

GET /api/products/:id → Get product by ID.

PUT /api/products/:id → Update product (Admin only).

DELETE /api/products/:id → Delete product (Admin only).

Order Routes

POST /api/orders → Create new order.

GET /api/orders → Get user’s orders.

GET /api/orders/all → Get all orders (Admin only).

⚛️ Frontend (Next.js)

Next.js is used for frontend instead of React.

Securely connects to backend APIs.

Authentication handled via JWT tokens.

Pages:

Home, Login, Register

Products, Product Details

Cart, Checkout, Orders

Admin Dashboard

✅ Testing

Use Postman to test APIs.

Example Authorization Header:

key: Authorization
value: Bearer <token>

🏁 Conclusion

Backend secured with JWT & middleware.

MongoDB used for data persistence (local or Atlas).

Next.js frontend consumes API routes.

Scalable structure for real-world e-commerce applications.
