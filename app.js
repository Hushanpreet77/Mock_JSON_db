const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const userRoutes = require('./routes/users.js');
const app = express();
const ratelimit = require('express-rate-limit');

//setup our view engine
app.set('view engine', 'ejs');
app.set('views', "./views");

//rate limiter
const fixedWindowLimiter = rateLimit({
    windowMs: 15 * 1000,
    max: 10,
    message: 'Too many requests. Please try again later',
});

app.use(fixedWindowLimiter);

app.use(express.static('public'));
app.use(userRoutes);