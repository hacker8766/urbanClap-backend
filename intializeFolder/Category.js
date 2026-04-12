const mongoose = require('mongoose');
const Category = require('../models/Category');

const MONGO_URI = 'mongodb://127.0.0.1:27017/urbanClap';

const seedData = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("🚀 MongoDB connected");

        await Category.deleteMany({});
        console.log("🧹 Collection cleared");

        const categoriesData = [
            { 
                name: "Salon", 
                icon: ["https://cdn-icons-png.flaticon.com/128/2707/2707142.png"], 
                bgcolor: "#f5a623" 
            },
            { 
                name: "Gym", 
                icon: ["https://cdn-icons-png.flaticon.com/128/2964/2964514.png"], 
                bgcolor: "#4caf50" 
            },
            { 
                name: "Restaurant", 
                icon: ["https://cdn-icons-png.flaticon.com/128/1046/1046747.png"], 
                bgcolor: "#ff5733" 
            },
            { 
                name: "Spa", 
                icon: ["https://cdn-icons-png.flaticon.com/128/2311/2311753.png"], 
                bgcolor: "#9b59b6" 
            },
            { 
                name: "Cafe", 
                icon: ["https://cdn-icons-png.flaticon.com/128/924/924514.png"], 
                bgcolor: "#e67e22" 
            },
            { 
                name: "Bar", 
                icon: ["https://cdn-icons-png.flaticon.com/128/931/931949.png"], 
                bgcolor: "#1abc9c" 
            },
            { 
                name: "Salon & Spa", 
                icon: ["https://cdn-icons-png.flaticon.com/128/1944/1944361.png"], 
                bgcolor: "#9b59b6" 
            },
            { 
                name: "Hotel", 
                icon: ["https://cdn-icons-png.flaticon.com/128/2983/2983973.png"], 
                bgcolor: "#34495e" 
            },
            { 
                name: "Bookstore", 
                icon: ["https://cdn-icons-png.flaticon.com/128/3389/3389081.png"], 
                bgcolor: "#e74c3c" 
            },
            { 
                name: "Cinema", 
                icon: ["https://cdn-icons-png.flaticon.com/128/2503/2503508.png"], 
                bgcolor: "#f39c12" 
            },
            { 
                name: "Yoga Center", 
                icon: ["https://cdn-icons-png.flaticon.com/128/3048/3048398.png"], 
                bgcolor: "#2ecc71" 
            },
            { 
                name: "Bakery", 
                icon: ["https://cdn-icons-png.flaticon.com/128/3014/3014515.png"], 
                bgcolor: "#d35400" 
            }
        ];

        await Category.insertMany(categoriesData);
        console.log("✅ Categories seeded successfully!");

        await mongoose.connection.close();
        console.log("🔌 Connection closed");

    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
};

export default seedData;