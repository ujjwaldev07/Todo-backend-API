const mongoose = require('mongoose')
require('dotenv').config();

const mongoUrl = process.env.MONGODB_URI;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected To MongoDB Server')
})

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err)
})

db.on('disconnected', () => {
    console.log('Disconnected To MongoDB Server')
})

module.exports = db;