const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users')
const logger = require('./middleware/logger')

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// LOGGER
app.use(logger)

// ROUTES
app.use('/api/users', users);

mongoose.connect("mongodb+srv://jasperjrrantay:bp2er0tKZ3yEXpcG@cluster0.satefrs.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to database!");
        app.listen(8000, () => {
            console.log(`Server running in port 8000`)
        })
    })
    .catch(() => {
        console.log("Connection Failed!");
    })