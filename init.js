const mongoose = require('mongoose');
const BusinessList = require('./models/BusinessList');
const Category = require('./models/Category');

const MONGO_URI = 'mongodb://127.0.0.1:27017/test/urbanClap';

const seedData = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected");

        await BusinessList.deleteMany({});
        await Category.deleteMany({});

        // 1️⃣ Create Categories
        const categories = await Category.insertMany([
            {
                name: "Salon",
                icon: ["https://example.com/salon.png"],
                bgcolor: "#f5a623"
            },
            {
                name: "Gym",
                icon: ["https://example.com/gym.png"],
                bgcolor: "#4caf50"
            }
        ]);

        // 2️⃣ Create Businesses
        await BusinessList.insertMany([
            {
                name: "Salon A",
                contactPerson: "Rahul",
                phone: "9876543210",
                email: "rahul@gmail.com",
                about: "Best salon",
                category: categories[0]._id,
                address: {
                    street: "Main Road",
                    city: "Delhi",
                    state: "Delhi",
                    pincode: "110001"
                },
                images: ["https://example.com/img1.jpg"],
                bookingName: "Haircut"
            },
            {
                name: "Gym X",
                contactPerson: "Amit",
                phone: "9123456780",
                email: "amit@gmail.com",
                about: "Best gym",
                category: categories[1]._id,
                address: {
                    street: "Ring Road",
                    city: "Delhi",
                    state: "Delhi",
                    pincode: "110002"
                },
                images: ["https://example.com/img2.jpg"],
                bookingName: "Workout"
            }
        ]);

        console.log("✅ Data seeded successfully!");
        mongoose.connection.close();

    } catch (error) {
        console.error(error);
    }
};

seedData();