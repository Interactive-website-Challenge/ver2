const fullname_input = document.getElementById("name");

function contact() {
    alert("Hi " + fullname_input.value.trim() + ", we have received your message, we will get back to you as soon as possible.")
}

let contact_message = document.getElementById("contact-button");
contact_message.addEventListener("click", contact);
