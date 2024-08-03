const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },

        age: {
            type: Number,
            required: true,
            default: 0,
        },
        
        profile_image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("Users", UserSchema);

module.exports = User;