const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    favourites: {
        type: [String] ,
        required: false
    }
}, {
    timestamps: true
});

// Create the User model from the schema
const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');

module.exports = User;
