const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    // 👇 store user reference (IMPORTANT)(which user booked this )
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 👇 snapshot fields
    userName: {
      type: String,
      required: true,
      trim: true,
    },

    // ⚠️ IMPORTANT: userEmail must be STRING (not object)
    userEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    businessList: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BusinessList",
      required: true,
    },

    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", BookingSchema);