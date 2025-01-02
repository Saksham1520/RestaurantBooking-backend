import { Booking } from "../Models/booking.model.js";


export const createBooking = async (req, res) => {
    try {
        const { name, contact, guests, date, time, restaurant } = req.body;
        if (!name || !contact || !guests || !date || !time || !restaurant) {
            res.status(400).json({
                message: "All Fields are required",
                success: false,
            })
        }

        const existingBooking = await Booking.findOne({ date, time, restaurant });
        if (existingBooking) {
            return res.status(200).json({
                message: `Time slot is already booked for ${restaurant}.`,
                success: false
            });
        }

        const booking = await Booking.create({
            name,
            contact,
            guests,
            date,
            time,
            restaurant,
        })

        return res.status(200).json({
            message: "Booking Confirm..",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong!!",
            error: error.message
        })
    }


}

export const allBookings = async (req, res) => {
    try {
        const { restaurant } = req.query;
        const bookings = await Booking.find({ restaurant })
        if (!bookings) {
            return res.status(200).json({
                message: "Bookings not found",
                success: false
            })
        }

        return res.status(200).json({
            message: "All bookings are retrieved.",
            bookings,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong!",
            error: error.message,
        });
    }
}

export const getBookingsByDate = async (req, res) => {
    try {
        const { date } = req.params;
        const { restaurant } = req.query;
        const bookingsByDate = await Booking.find({ date, restaurant });
        if (bookingsByDate) {

            res.status(200).json({
                success: true,
                bookingsByDate
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong!",
            error: error.message,
        });
    }
}