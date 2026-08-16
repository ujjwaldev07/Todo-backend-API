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
app.use('/auth/api', userRoutes);
app.use('/auth/api', jwtAuthMiddleware, todoRoutes);
app.use('/auth/api', jwtAuthMiddleware, statsRoutes);

module.exports = app;