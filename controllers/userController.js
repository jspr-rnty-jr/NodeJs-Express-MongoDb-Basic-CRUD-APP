const User = require('../models/user.model')

// @desc   Get all users
// @route  GET /api/users
const getUsers = async (req, res, next) => {
   try {
        const users = await User.find({});
        
        res.status(200).json(users)
   } catch (error) {
        res.status(500).json({message : error.message})
   }
}

// @desc   Get single user
// @route  GET /api/users/:id
const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if(!user){
            const error = new Error(`A user with the id of ${id} was not found`);
            error.status = 404;
            return next(error);
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// @desc    Create new user
// @route   POST /api/users
const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


// @desc    Update new user
// @route   POST /api/users
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if(!user){
            return res.status(404).json({message: 'User not found!'})
        }


        const updatedUser = await User.findById(id);

        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// @desc    Delete new user
// @route   POST /api/users
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user){
            return res.status(404).json({message: 'User not found!'})
        }

        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}