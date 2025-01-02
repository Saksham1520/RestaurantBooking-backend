import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/database.js";
import bookingRoute from "./Routes/booking.routes.js"
dotenv.config({})
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: "http://localhost:3000",

}

app.use(cors(corsOptions));

app.use("/api", bookingRoute)

const server = app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running at port: ${PORT}`)
})