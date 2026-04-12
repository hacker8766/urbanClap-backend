const mongoose = require("mongoose");
const BusinessList = require("../models/BusinessList");
const Booking = require("../models/Booking");
const Category = require("../models/Category");

mongoose.connect("mongodb+srv://himanshusingh11010_db_user:ui%40Ef_YPWBwfR9T@cluster0.7owfadc.mongodb.net/urbanClap?retryWrites=true&w=majority")
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));

const insertData = async () => {
  try {
    const Categorydta = await Category.find();
    const onlyData = Categorydta.map((el) => el._id);

    const Bookingdata = await Booking.find();
    const BookindID = Bookingdata.map((el) => el._id);

    await BusinessList.deleteMany({});
    const seedBusinesses = [
      {
        name: "Urban Salon",
        contactPerson: "Rahul Sharma",
        phone: "9876543210",
        email: "urban@gmail.com",
        about: "Professional salon services for men and women.",
        category: onlyData[1],
        address: {
          street: "12 MG Road",
          city: "Delhi",
          state: "Delhi",
          pincode: "110001"
        },
        images: ["https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[0],
      },
      {
        name: "Fit Gym",
        contactPerson: "Amit Verma",
        phone: "9123456780",
        email: "fitgym@gmail.com",
        about: "Modern gym with latest equipment.",
        category: onlyData[0],
        address: {
          street: "45 Ring Road",
          city: "Delhi",
          state: "Delhi",
          pincode: "110002"
        },
        images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[1]
      },
      {
        name: "Quick Car Wash",
        contactPerson: "Suresh Kumar",
        phone: "9988776655",
        email: "quickwash@gmail.com",
        about: "Fast and affordable car cleaning.",
        category: onlyData[5],
        address: {
          street: "78 Outer Ring Road",
          city: "Delhi",
          state: "Delhi",
          pincode: "110003"
        },
        images: ["https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[2]
      },
      {
        name: "Health Plus Clinic",
        contactPerson: "Dr. Neha Gupta",
        phone: "9012345678",
        email: "clinic@gmail.com",
        about: "24/7 medical services and consultation.",
        category: onlyData[2],
        address: {
          street: "23 Patel Nagar",
          city: "Delhi",
          state: "Delhi",
          pincode: "110008"
        },
        images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[3]
      },
      {
        name: "Tasty Bites",
        contactPerson: "Ankit Jain",
        phone: "9090909090",
        email: "tasty@gmail.com",
        about: "Delicious fast food and snacks.",
        category: onlyData[3],
        address: {
          street: "56 Lajpat Nagar",
          city: "Delhi",
          state: "Delhi",
          pincode: "110024"
        },
        images: ["https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[4]
      },
      {
        name: "Smart Repairs",
        contactPerson: "Vikas Singh",
        phone: "9345678123",
        email: "repair@gmail.com",
        about: "Mobile and laptop repair services.",
        category: onlyData[6],
        address: {
          street: "89 Karol Bagh",
          city: "Delhi",
          state: "Delhi",
          pincode: "110005"
        },
        images: ["https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[5]
      },
      {
        name: "Green Grocery",
        contactPerson: "Ramesh Yadav",
        phone: "9212345678",
        email: "grocery@gmail.com",
        about: "Fresh fruits and vegetables daily.",
        category: onlyData[2],
        address: {
          street: "34 Rohini Sector 5",
          city: "Delhi",
          state: "Delhi",
          pincode: "110085"
        },
        images: ["https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[5]
      },
      {
        name: "Elite Coaching",
        contactPerson: "Pooja Mehta",
        phone: "9871234567",
        email: "coaching@gmail.com",
        about: "Best coaching for competitive exams.",
        category: onlyData[1],
        address: {
          street: "67 Mukherjee Nagar",
          city: "Delhi",
          state: "Delhi",
          pincode: "110009"
        },
        images: ["https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[6]
      },
      {
        name: "Home Clean Services",
        contactPerson: "Deepak Chauhan",
        phone: "9765432109",
        email: "clean@gmail.com",
        about: "Professional home cleaning services.",
        category: onlyData[8],
        address: {
          street: "12 Dwarka Sector 10",
          city: "Delhi",
          state: "Delhi",
          pincode: "110075"
        },
        images: ["https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[7]
      },
      {
        name: "Pet Care Center",
        contactPerson: "Karan Malhotra",
        phone: "9898989898",
        email: "petcare@gmail.com",
        about: "Complete care for your pets.",
        category: onlyData[1],
        address: {
          street: "90 Saket",
          city: "Delhi",
          state: "Delhi",
          pincode: "110017"
        },
        images: ["https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop"],
        bookingName: BookindID[6]
      }
    ];

    await BusinessList.insertMany(seedBusinesses);
    console.log("Data inserted successfully ✅");
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};
insertData();
// export default insertData;