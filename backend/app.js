const express = require('express')
const app = express();
require('dotenv').config();

const { jwtAuthMiddleware } = require('./jwt');
const db = require('./db');
const PORT = process.env.PORT || 6000;
const bodyParser = require('body-parser')


// Routes
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const statsRoutes = require('./routes/statsRoutes');

// Middlewares
app.use(bodyParser.json());
app.use('/api/auth', userRoutes);
app.use('/api/auth', jwtAuthMiddleware, todoRoutes);
app.use('/api/auth', jwtAuthMiddleware, statsRoutes);

module.exports = app;