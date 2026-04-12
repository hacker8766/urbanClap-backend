const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// Models
const Category = require("./models/Category");
const Booking = require("./models/Booking");
const BusinessList = require("./models/BusinessList");
const User = require("./models/User");

// =====================
// 🔐 AUTH MIDDLEWARE
// =====================
const isLoggedIn = async (req, res, next) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json({
    success: false,
    message: "Not logged in",
  });
};

// =====================
// 🔥 MIDDLEWARE SETUP
// =====================

// 🔥 UPDATED CORS (supports local + production)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      
      "https://urbanclap-frontend.vercel.app/" ,
      "https://urbanclap-frontend.vercel.app"// 👉 replace with your real frontend URL
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🔥 IMPORTANT FOR DEPLOYMENT (Render / Proxy)
app.set("trust proxy", 1);

// 🔥 UPDATED SESSION CONFIG
app.use(
  session({
    secret: "mycode",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,

      // ✅ dynamic based on environment
      secure: process.env.NODE_ENV === "production",

      // ✅ important for cross-origin cookies
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",

      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// ===========
// 🔥 PASSPORT SETUP
// =====================
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =====================
// 🔥 DATABASE
// =====================
mongoose
  .connect("mongodb+srv://himanshusingh11010_db_user:ui%40Ef_YPWBwfR9T@cluster0.7owfadc.mongodb.net/urbanClap?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// =====================
// 🚀 AUTH ROUTES
// =====================

// REGISTER
app.post("/register", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const newUser = new User({ username, email, phone });
    const registeredUser = await User.register(newUser, password);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: registeredUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// LOGIN
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: info?.message || "Invalid credentials",
      });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
        },
      });
    });
  })(req, res, next);
});

// LOGOUT
app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);

    req.session.destroy(() => {
      res.clearCookie("connect.sid");

      res.json({
        success: true,
        message: "Logged out successfully",
      });
    });
  });
});

// CHECK AUTH
app.get("/check-auth", (req, res) => {
  if (!req.user) {
    return res.json({ loggedIn: false });
  }

  res.json({
    loggedIn: true,
    user: {
      id: req.user._id,
      email: req.user.email,
      username: req.user.username,
    },
  });
});

// CURRENT USER
app.get("/me", (req, res) => {
  if (!req.user) {
    return res.json({
      username: "",
      email: "",
      id: "",
    });
  }

  res.json({
    username: req.user.username,
    email: req.user.email,
    id: req.user._id,
  });
});

// =====================
// 📦 CATEGORY ROUTES
// =====================
app.get("/Getcategory", async (req, res) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// =====================
// 📦 BUSINESS ROUTES
// =====================
app.get("/GetBusinessList", async (req, res) => {
  try {
    const list = await BusinessList.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/GetBusinessByCategory/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const list = await BusinessList.find().populate("category");

    const filtered = list.filter(
      (el) => el.category?.name === category
    );

    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/GetBusinessListById/:id", async (req, res) => {
  try {
    const business = await BusinessList.findById(req.params.id).populate("category");
    res.json(business);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// =====================
// 📦 BOOKING ROUTES
// =====================
app.post("/create-booking", async (req, res) => {
  try {
    const bookingData = req.body;
    console.log("1");

    const booking = new Booking(bookingData);
    console.log("2");
    const savedBooking = await booking.save();
    console.log("3");

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating booking",
      error: error.message,
    });
  }
});

app.get("/admin-data", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId")
      .populate("businessList");

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
});

// =====================
// 🚀 SERVER
// =====================
const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
