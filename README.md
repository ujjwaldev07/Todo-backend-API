Todo Backend API:
A production-style RESTful Todo API** built with Node.js, Express.js, MongoDB, and JWT authentication.Simple CRUD. Secure authentication. Powerful filtering. Clean API architecture.

Features:

 🔐 JWT-based authentication
 👤 User signup & login
 📝 Todo CRUD operations
 🛡️ Protected routes
 🔎 Todo filtering & sorting
 📊 Todo statistics
 🔑 Password hashing
 📦 MongoDB database
 ⚡ RESTful API architecture
 ✅ Consistent JSON responses

Tech Stack:

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Runtime               |
| Express.js | REST API              |
| MongoDB    | Database              |
| Mongoose   | ODM                   |
| JWT        | Authentication        |
| bcrypt     | Password hashing      |
| dotenv     | Environment variables |


⚙️ Installation:

1. Clone the repository


git clone <your-repository-url>
cd backend

2. Install dependencies

npm install

 3. Configure environment variables

Create a .env file:

env
PORT=your_server_port_number
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Start the server

npm start

For development:

npm run dev

🔑 Authentication:

Authentication uses JWT tokens.

Protected endpoints require:

Authorization: Bearer <your_token>

Typical authentication flow:

Signup → Login → Receive JWT → Access Protected Routes

 API Endpoints:

👤 Users

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| POST   |  /api/users/signup  | Create account |
| POST   |  /api/users/login   | Login          |
| GET    |  /api/users`        | Get users      |
| PUT    |  /api/users/:id     | Update user    |
| DELETE |  /api/users/:id     | Delete user    |

📝 Todos

| Method | Endpoint         | Description |
| ------ | ---------------- | ----------- |
| POST   |  /api/todos      | Create todo |
| GET    |  /api/todos       | Get todos   |
| GET    |  /api/todos/:id  | Get todo    |
| PUT    |  /api/todos/:id  | Update todo |
| DELETE |  /api/todos/:id  | Delete todo |

📊 Statistics:

GET /api/todos/stats

Supports FILTERING and SORTING based on your API implementation.

Example Response:

json:
{
  "success": true,
  "message": "Todos fetched successfully",
  "count": 2,
  "data": []
}

🔒 Security:

 JWT authentication for protected resources
 Passwords stored using hashing
 Sensitive configuration stored in environment variables
 Unauthorized requests rejected by authentication middleware

🎯 Project Goal:

The goal of this project is to build a clean, secure, and scalable backend API while practicing real-world backend concepts such as authentication, authorization, database operations, middleware, filtering, sorting, and API design.

👨‍💻 Author:

Ujjwal Singh

Built with Node.js, Express.js, MONGODB 
