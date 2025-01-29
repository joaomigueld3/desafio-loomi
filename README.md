# Desafio-Loomi

## 📌 Overview  
This is the backend for **Desafio-Loomi**, providing authentication, user roles, and order management with a RESTful API.

---

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/joaomigueld3/desafio-loomi.git
cd desafio-loomi
```

### 2️⃣ Install Dependencies  
```sh
npm install
```
### 3️⃣ Configure Environment Variables
#### Create a .env file based on .env.example
#### Fill in required environment variables (database, API keys, etc.)

### 4️⃣ Run the Application
```sh
npm run swagger  # Start API documentation  
npm run dev      # Start the backend server
```

## 🛠 Features
🔐 Authentication
#### Login, signup, and refresh-token routes do not require authentication.
#### Other routes require authentication via JWT tokens.
#### Email verification is required for new accounts.

## 🎭 User Roles & Permissions
#### Customer:	Create an account, edit profile, view products, place orders
#### Admin:	Full access: manage users, products, and orders

## 📦 Product Management (CRUD)
#### ✔ Add, update, delete, and list products
#### ✔ Search with filters (category, price, availability)
#### ✔ Inventory updates based on orders

## 📋 Order Management
#### ✔ Customers can place orders
#### ✔ Admins can update order statuses (In Preparation, Dispatched, Delivered)
