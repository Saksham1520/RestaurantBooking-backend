import express from "express";
import { allBookings, createBooking, getBookingsByDate } from "../Controllers/booking.controller.js";
const router = express.Router()

router.route("/createbooking").post(createBooking)
router.route("/getAllbookings").get(allBookings)
router.route("/getbookingbydate/:date").get(getBookingsByDate)

export default router;