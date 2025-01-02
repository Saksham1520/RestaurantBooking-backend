import mongoose, { mongo } from "mongoose";


const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
}, { timestamps: true })

export const Booking = mongoose.model("Booking", bookingSchema)