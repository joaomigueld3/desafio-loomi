# ecommerce-chall

## 📌 Overview  
This is the backend for **Ecommerce-Chall**, providing authentication, user roles, and order management with a RESTful API.

---

## 🏗 Tech Stack

<img align="center" alt="Joao-Node" height="30" width="40" src="https://skillicons.dev/icons?i=nodejs&theme=light"> Node.js – Backend runtime  
<img align="center" alt="Joao-Express" height="30" width="40" src="https://skillicons.dev/icons?i=express&theme=light"> Express.js – Web framework  
<img align="center" alt="Joao-Postgres" height="30" width="40" src="https://skillicons.dev/icons?i=postgres&theme=light"> Postgres – SQL database  
<img align="center" alt="Joao-Sequelize" height="30" width="40" src="https://skillicons.dev/icons?i=sequelize&theme=light"> Sequelize – Object-Relational Mapping (ORM)  
<img align="center" alt="Joao-Docker" height="30" width="40" src="https://skillicons.dev/icons?i=docker&theme=light"> Docker - Containerization

</div>

## 🚀 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/joaomigueld3/ecommerce-chall.git
cd ecommerce-chall
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
