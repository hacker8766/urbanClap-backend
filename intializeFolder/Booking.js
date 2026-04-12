const mongoose = require("mongoose");
const Booking = require("../models/Booking");
const Category = require("../models/Category")

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/urbanClap");
  console.log("Connected to DB");

// Optional: clear old bookings
    await Booking.deleteMany({});

   // 👉 Replace with your real BusinessList IDs
    const Categorydta = await Category.find()
    const onlyData = Categorydta.map((el)=>el._id);
    // console.log(onlyData);
    
  

  const bookings = [
    {
      userName: "Himanshu",
      userEmail: "himanshu@gmail.com",
      date: "2026-04-10",
      time: "10:00 AM",
      businessList: onlyData[0],
      bookingStatus: "confirmed"
    },
    {
      userName: "Rahul",
      userEmail: "rahul@gmail.com",
      date: "2026-04-11",
      time: "2:00 PM",
      businessList: onlyData[1],
      bookingStatus: "pending"
    },
    {
      userName: "Amit",
      userEmail: "amit@gmail.com",
      date: "2026-04-12",
      time: "11:30 AM",
      businessList: onlyData[2],
      bookingStatus: "completed"
    },
    {
      userName: "Priya",
      userEmail: "priya@gmail.com",
      date: "2026-04-13",
      time: "1:00 PM",
      businessList: onlyData[3],
      bookingStatus: "confirmed"
    },
    {
      userName: "Sneha",
      userEmail: "sneha@gmail.com",
      date: "2026-04-14",
      time: "4:00 PM",
      businessList: onlyData[4],
      bookingStatus: "cancelled"
    },
    {
      userName: "Karan",
      userEmail: "karan@gmail.com",
      date: "2026-04-15",
      time: "9:00 AM",
      businessList: onlyData[5],
      bookingStatus: "pending"
    },
    {
      userName: "Neha",
      userEmail: "neha@gmail.com",
      date: "2026-04-16",
      time: "3:30 PM",
      businessList: onlyData[6],
      bookingStatus: "confirmed"
    },
    {
      userName: "Rohit",
      userEmail: "rohit@gmail.com",
      date: "2026-04-17",
      time: "12:00 PM",
      businessList: onlyData[7],
      bookingStatus: "completed"
    },
    {
      userName: "Anjali",
      userEmail: "anjali@gmail.com",
      date: "2026-04-18",
      time: "5:00 PM",
      businessList: onlyData[8],
      bookingStatus: "pending"
    },
    {
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

// main()
//   .then(() => {
//     mongoose.connection.close();
//   })
//   .catch((err) => console.log(err));
export default main;