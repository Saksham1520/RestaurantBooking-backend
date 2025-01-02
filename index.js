import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/database.js";
import bookingRoute from "./Routes/booking.routes.js";

dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: "https://restaurantbooking11.netlify.app",
};

app.use(cors(corsOptions));


app.use("/api", bookingRoute);


export default function handler(req, res) {
    app(req, res);
}


connectDB();
console.log("Vercel Serverless API is ready!");
