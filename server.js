require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is Connected");

    const contactRoutes = require("./routes/contactRoute");
    app.use("/api/contacts" , contactRoutes);

    }catch (error) {
        console.log("Database Connection Failed", error.message);
        process.exit(1);
    }

}
connectDB();







const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

