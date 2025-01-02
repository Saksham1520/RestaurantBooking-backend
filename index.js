import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/database.js";
import bookingRoute from "./Routes/booking.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: "http://localhost:3000", // Adjust the allowed origin as needed
};

app.use(cors(corsOptions));

// Booking Routes
app.use("/api", bookingRoute);

// Vercel's serverless function export
export default function handler(req, res) {
    app(req, res);  // This makes the Express app handle requests for serverless functions
}

// Ensure DB connection and server startup (you can remove this if you want Vercel to handle the serverless scaling)
connectDB();
console.log("Vercel Serverless API is ready!");
