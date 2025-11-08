# Nexora Mock E-Commerce Cart

This is a Full Stack Shopping Cart App built as part of the Vibe Commerce screening assignment. It allows users to browse products, add them to a cart, view totals, and perform a mock checkout — all in a simple, responsive interface.

# Overview

The goal of this project is to demonstrate understanding of full-stack development — including API design, frontend integration, and database handling.
It includes:

# RESTful APIs with Express.js

React frontend for product display and cart management

Basic database persistence MongoDB 

Mock checkout flow (no real payments)

 Features
 Frontend (React)

# Responsive products grid with Add to Cart buttons

Cart page showing items, quantity, and total price

Option to remove or update cart items

Simple checkout form (name, email) with mock receipt popup

# Backend (Express + MongoDB)

GET /api/products → Fetch mock product list

POST /api/cart → Add item to cart

DELETE /api/cart/:id → Remove item from cart

GET /api/cart → Get current cart and total

POST /api/checkout → Mock checkout and return receipt

# Bonus Features

 Database persistence (MongoDB mock user data)
 Error handling for invalid requests
 Clean folder structure and reusable components
 Responsive design (works on both mobile and desktop)

# Tech Stack

Frontend: React, Axios, CSS
Backend: Node.js, Express.js
Database: MongoDB 
Version Control: Git & GitHub
# How to Run Locally
 Clone the repository
git clone https://github.com/ankitchhonker/nexora-assignment.git

 Setup Backend
cd backend
npm install
npm start


Backend will run on http://localhost:5000

# Setup Frontend
cd ../frontend
npm install
npm run dev


 

# API Endpoints
 
GET	/api/products	Get list of products
POST	/api/cart	Add product to cart
DELETE	/api/cart/:id	Remove product from cart
GET	/api/cart	Get all cart items with total
POST	/api/checkout	Perform mock checkout and return receipt
 

 

# Demo Video

🎥 Demo Video Link:(https://docs.google.com/videos/d/1IbOP2JLTfyHTuPKlW9QeL77kOdjoUU6CKS7c3PEbO-k/edit?usp=sharing)

👨‍💻 Author

# Ankit Chhonker
# Full Stack Developer
 
