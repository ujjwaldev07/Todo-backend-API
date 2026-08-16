Todo Backend API:
A production-style RESTful Todo API built with Node.js, Express.js, MongoDB, and JWT authentication.Simple CRUD. Secure authentication. Powerful filtering. Clean API architecture.

Features:

<img width="324" height="327" alt="image" src="https://github.com/user-attachments/assets/4d018758-85aa-451f-b9c1-69377424a7e4" />


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

<img width="461" height="228" alt="image" src="https://github.com/user-attachments/assets/47925fc3-1010-437c-bfce-882b346f9219" />

🔒 Security:

 JWT authentication for protected resources
 Passwords stored using hashing
 Sensitive configuration stored in environment variables
 Unauthorized requests rejected by authentication middleware

🎯 Project Goal:

The goal of this project is to build a clean, secure, and scalable backend API while practicing real-world backend concepts such as authentication, authorization, database operations, middleware, filtering, sorting, and API design.

👨‍💻 Author:

Ujjwal Singh

Built with Node.js, Express.js, MongoDB, JWT. 
