const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      // minlength: [3, "Username must be at least 3 characters"],
      // maxlength: [30, "Username cannot exceed 30 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      // match: [/.+\@.+\..+/, "Please enter a valid email"],
    },

   

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      // match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

// userSchema.plugin(passportLocalMongoose);
userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", userSchema);