const fullname_input = document.getElementById("name");

function contact() {
    alert("Hey " + fullname_input.value.trim().toLowerCase().charAt(0).toUpperCase() + ", we have received your message, we will get back to you as soon as possible.")
}

let contact_message = document.getElementById("book-now-button");
contact_message.addEventListener("click", contact);