const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    contactPerson: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true,
        minlength: [10, "Please enter valid number"],
        maxlength: 10
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    about: {
        type: String,
        required: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    address: {
        street: String,
        city: String,
        state: String,
        pincode: String
    },

    images: [
        {
            type: String   // store image URLs
        }
    ],

    bookingName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true,
        
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BusinessList = mongoose.model('BusinessList', BusinessSchema);

module.exports = BusinessList;