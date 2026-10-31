"use strict";

/**
 * Q5: Movie Ticket Booking
 * Validates user input (Name, Email, Seats 1-10) using RegExp and checks,
 * stores details in an object, and displays ticket confirmation.
 */

class MovieTicketBooking {
    constructor() {
        this.nameRegex = /^[A-Za-z\s]+$/;
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }

    bookTickets(name, email, seats) {
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const seatCount = Number(seats);

        if (!this.nameRegex.test(trimmedName)) {
            console.error("[Booking Failed] Invalid Name: Only alphabets and spaces are allowed.");
            return null;
        }

        if (!this.emailRegex.test(trimmedEmail)) {
            console.error("[Booking Failed] Invalid Email format.");
            return null;
        }

        if (isNaN(seatCount) || seatCount < 1 || seatCount > 10) {
            console.error("[Booking Failed] Invalid Seats: You can book between 1 and 10 seats only.");
            return null;
        }

        const bookingInfo = {
            name: trimmedName,
            email: trimmedEmail,
            seats: seatCount,
            bookingId: "TICKET-" + Math.floor(100000 + Math.random() * 900000),
            timestamp: new Date().toLocaleString()
        };

        this.printTicket(bookingInfo);
        return bookingInfo;
    }

    printTicket(ticket) {
        console.log("\n==============================");
        console.log("     MOVIE TICKET CONFIRMATION  ");
        console.log("==============================");
        console.log(`Booking ID : ${ticket.bookingId}`);
        console.log(`Name       : ${ticket.name}`);
        console.log(`Email      : ${ticket.email}`);
        console.log(`Seats Booked: ${ticket.seats}`);
        console.log(`Timestamp  : ${ticket.timestamp}`);
        console.log("==============================\n");
    }
}

const bookingSystem = new MovieTicketBooking();

console.log("=== Test Case 1: Valid Booking ===");
bookingSystem.bookTickets("Emma Watson", "emma.watson@hollywood.com", 4);

console.log("=== Test Case 2: Invalid Seat Count (> 10) ===");
bookingSystem.bookTickets("David Miller", "david@miller.com", 12);

console.log("=== Test Case 3: Invalid Name (Numbers included) ===");
bookingSystem.bookTickets("John2nd", "john@example.com", 2);
