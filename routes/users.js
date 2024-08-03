const express = require('express');
const { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/userController') 
const router = express.Router();

// Get all users
router.get('/users', getUsers)

// Get single user by id
router.get('/user/:id', getUser);

// Create new user
router.post('/users', createUser);

// Update User
router.put('/user/:id', updateUser);

// Delete User
router.delete('/user/:id', deleteUser)

module.exports = router;