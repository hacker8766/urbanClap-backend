const mongoose = require("mongoose");
const User = require("../models/User"); // adjust path if needed

// 🔥 Connect DB
mongoose.connect("mongodb+srv://himanshusingh11010_db_user:ui%40Ef_YPWBwfR9T@cluster0.7owfadc.mongodb.net/urbanClap?retryWrites=true&w=majority")
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.log(err));

// 🔥 Seed Function
const seedUsers = async () => {
  try {
    // Optional: clear old users
    await User.deleteMany({});
    console.log("🗑 Old users deleted");

    // Create users using register (IMPORTANT)
    const users = [
      {
        username: "admin",
        email: "admin@gmail.com",
        phone: "1234567890",
        password: "admin123"
      },
      {
        username: "rahul",
        email: "rahul@gmail.com",
        phone: "9876543210",
        password: "rahul123"
      },
      {
        username: "amit",
        email: "amit@gmail.com",
        phone: "9999999999",
        password: "amit123"
      }
    ];

    for (let user of users) {
      const { username, email, phone, password } = user;

      const newUser = new User({ username, email, phone });

      await User.register(newUser, password);
    }

    console.log("✅ Users seeded successfully");
    process.exit();

  } catch (error) {
    console.log("❌ Error seeding users:", error);
    process.exit();
  }
};

seedUsers();