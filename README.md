# 🚀 Full-Stack E-Commerce Project Setup

This document explains the complete setup and project structure for building a **MERN + Next.js** application.  
It covers **High-Level Design (HLD)** and **Low-Level Design (LLD)** including environment setup, database connection, folder structure, middleware, authentication, and API design.

---

# 🏗️ High-Level Design (HLD)

## 🎯 Overview
The system is a **full-stack e-commerce application** built using:
- **Frontend:** Next.js (React framework)
- **Backend:** Node.js with Express.js
- **Database:** MongoDB (Local, Compass, or Atlas Cloud)
- **Authentication:** JWT-based authentication and authorization
- **Middleware:** dotenv, morgan, jsonwebtoken

The application follows an **MVC-inspired modular structure** with controllers, routes, and models.

---

## 🔐 Core Features
- User authentication (Register, Login, Profile, Admin access)
- Product management (CRUD operations)
- Order management
- Role-based access control (User vs Admin)
- Environment variable protection
- API logging with Morgan
- Cloud/Local database support

---

## 🏛️ System Architecture


    flowchart TD
        Client[Next.js Frontend] -->|HTTP Requests| API[Express.js Server]
        API -->|Auth| JWT[JWT Middleware]
        API --> DB[(MongoDB Database)]
        JWT --> API
        Admin[Admin Role] -->|Extra Access| API

## Project Folder Structure

    project-root/
    │── config/              # Database connection
    │── controllers/         # Business logic
    │── helpers/             # Utility/helper functions
    │── middlewares/         # Custom middlewares
    │── models/              # MongoDB schemas
    │── routes/              # API routes
    │── server.js            # Main entry point
    │── .env                 # Environment variables
    │── package.json


## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/eccomerce
JWT_SECRET=your_secret_key

import dotenv from "dotenv";
dotenv.config();

## 📑 Middlewares

- **dotenv** → Load environment variables from `.env`
- **morgan** → Log API requests for monitoring and debugging
- **jsonwebtoken** → Handle authentication using JWT tokens
- **Custom middleware** → Protect routes and verify user roles (User/Admin)



## Authentication & Authorization

### Token Generation:
- On login/register → issue JWT token.

### Protect Routes:
- Middleware validates JWT before granting access.

### Admin Access:
- Role field in user schema decides admin privileges.


## 🧪 API Design

### 🔑 Auth Routes
- **POST** `/api/auth/register` → Register user  
- **POST** `/api/auth/login` → Login & issue token  
- **GET** `/api/auth/profile` → Get user profile (Protected)  
- **GET** `/api/auth/admin` → Admin-only route  

---

### 👤 User Routes
- **GET** `/api/users` → Get all users (Admin only)  
- **PUT** `/api/users/:id` → Update user details  
- **DELETE** `/api/users/:id` → Delete user  

---

### 📦 Product Routes
- **POST** `/api/products` → Create product (Admin only)  
- **GET** `/api/products` → Get all products  
- **GET** `/api/products/:id` → Get product by ID  
- **PUT** `/api/products/:id` → Update product (Admin only)  
- **DELETE** `/api/products/:id` → Delete product (Admin only)  

---

### 🛒 Order Routes
- **POST** `/api/orders` → Create order  
- **GET** `/api/orders` → Get user’s orders  
- **GET** `/api/orders/all` → Get all orders (Admin only)  


## ⚛️ Frontend (Next.js)

Next.js is used as the frontend framework with full **API integration** from the backend.  

### 📄 Pages
- **Home** → Landing page with product listings  
- **Login / Register** → User authentication pages  
- **Products & Product Details** → Browse products and view details  
- **Cart & Checkout** → Add items to cart and place orders  
- **Orders** → View user’s past and active orders  
- **Admin Dashboard** → Manage products, users, and orders (Admin only)  

---

## ✅ Testing

Use **Postman** (or similar API client) for testing backend APIs.  

### Authorization
- Add JWT token in the request header:  

## 🏁 Conclusion

- ✅ **Backend** secured with **JWT authentication** & **role-based middleware**  
- 🗄️ **Database** can be local **MongoDB**, **Compass**, or **Atlas Cloud**  
- ⚛️ **Frontend** built with **Next.js** consuming backend APIs  
- 🚀 Designed to **scale** as a production-ready **e-commerce system**  

