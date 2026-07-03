const mongoose = require('mongoose');

const connectDB = async () => {
    // Verified working cloud connection string
    const MONGO_URI = "mongodb+srv://shivam2005modi:Shivam%40123@cluster1.ssszgel.mongodb.net/?appName=Cluster1"; 
    
    try {
        await mongoose.connect(MONGO_URI);
        console.log("🚀 Database connected successfully!");
    } catch (err) {
        console.error("❌ Database connection error:", err);
        process.exit(1); 
    }
};

module.exports = connectDB;