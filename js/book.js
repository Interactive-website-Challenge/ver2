const fullname_input = document.getElementById("name");

function book() {
    alert("Hey " + fullname_input.value.trim().toLowerCase().charAt(0).toUpperCase() + ", your ticket has been booked. We look forward to see you at the event!")
}

let booking_ticket = document.getElementById("book-now-button");
booking_ticket.addEventListener("click", book);