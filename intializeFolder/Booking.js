const mongoose = require("mongoose");
const Booking = require("../models/Booking");
const Category = require("../models/Category")
const User = require("../models/User")

async function main() {
  await mongoose.connect("mongodb+srv://himanshusingh11010_db_user:ui%40Ef_YPWBwfR9T@cluster0.7owfadc.mongodb.net/urbanClap?retryWrites=true&w=majority");
  console.log("Connected to DB");
// mongodb+srv://himanshusingh11010_db_user:<db_password>@cluster0.7owfadc.mongodb.net/
// Optional: clear old bookings
    await Booking.deleteMany({});

   // 👉 Replace with your real BusinessList IDs
    const Categorydta = await Category.find()
    const onlyData = Categorydta.map((el)=>el._id);
    const userData = await User.find();
    const userId = userData.map((el)=>el._id);
    // console.log(onlyData);
    
  

  const bookings = [
    {
      userId:userId[0],
      userName: "Himanshu",
      userEmail: "himanshu@gmail.com",
      date: "2026-04-10",
      time: "10:00 AM",
      businessList: onlyData[0],
      bookingStatus: "confirmed"
    },
    {
      userId:userId[1],
      userName: "Rahul",
      userEmail: "rahul@gmail.com",
      date: "2026-04-11",
      time: "2:00 PM",
      businessList: onlyData[1],
      bookingStatus: "pending"
    },
    {
      userId:userId[2],
      userName: "Amit",
      userEmail: "amit@gmail.com",
      date: "2026-04-12",
      time: "11:30 AM",
      businessList: onlyData[2],
      bookingStatus: "completed"
    },
    {
      userId:userId[0],
      userName: "Priya",
      userEmail: "priya@gmail.com",
      date: "2026-04-13",
      time: "1:00 PM",
      businessList: onlyData[3],
      bookingStatus: "confirmed"
    },
    {
      userId:userId[1],
      userName: "Sneha",
      userEmail: "sneha@gmail.com",
      date: "2026-04-14",
      time: "4:00 PM",
      businessList: onlyData[4],
      bookingStatus: "cancelled"
    },
    {
      userId:userId[2],
      userName: "Karan",
      userEmail: "karan@gmail.com",
      date: "2026-04-15",
      time: "9:00 AM",
      businessList: onlyData[5],
      bookingStatus: "pending"
    },
    {
      userId:userId[0],
      userName: "Neha",
      userEmail: "neha@gmail.com",
      date: "2026-04-16",
      time: "3:30 PM",
      businessList: onlyData[6],
      bookingStatus: "confirmed"
    },
    {
      userId:userId[1],
      userName: "Rohit",
      userEmail: "rohit@gmail.com",
      date: "2026-04-17",
      time: "12:00 PM",
      businessList: onlyData[7],
      bookingStatus: "completed"
    },
    {
      userId:userId[2],
      userName: "Anjali",
      userEmail: "anjali@gmail.com",
      date: "2026-04-18",
      time: "5:00 PM",
      businessList: onlyData[8],
      bookingStatus: "pending"
    },
    {
      userId:userId[1],
      userName: "Vikas",
      userEmail: "vikas@gmail.com",
      date: "2026-04-19",
      time: "6:30 PM",
      businessList: onlyData[9],
      bookingStatus: "confirmed"
    }
  ];

  await Booking.insertMany(bookings);

  console.log("10 Bookings Inserted");
}

main()
  .then(() => {
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
// export default main;