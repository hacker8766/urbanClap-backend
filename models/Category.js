const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    icon: [
        {
            type: String   // store image/asset URL or file path
        }
    ],

    bgcolor: {
        type: String,   // store hex color like #ffffff
        default: '#ffffff'
    }
}, {
    timestamps: true
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;