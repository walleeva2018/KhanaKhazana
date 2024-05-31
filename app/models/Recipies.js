const mongoose = require('mongoose');

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    activeTime: {
        type: String,
        required: true,
        trim: true
    },
    totalTime: {
        type: String,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    serves: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    steps: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
});

// Create the Recipe model from the schema
const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
