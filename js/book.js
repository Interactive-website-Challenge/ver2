const form = document.getElementById("form");
const fullname_input = document.getElementById("name");
const email_input = document.getElementById("email");
const number_input = document.getElementById("phone");
const error_message = document.getElementById("error-message");

// Event listener for form submission
form.addEventListener("submit", (e) => {
    let errors = getBookFormErrors();
    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ");
        error_message.scrollIntoView({ behavior: "smooth" }); // Ensure visibility
    }
});

// Function to validate form inputs
function getBookFormErrors() {
    let errors = [];

    // Validation for Full Name
    if (!fullname_input.value.trim()) {
        errors.push("Full name required");
        fullname_input.parentElement.classList.add("incorrect");
    }

    // Validation for Email
    if (!email_input.value.trim() || !validateEmail(email_input.value)) {
        errors.push("Valid email required");
        email_input.parentElement.classList.add("incorrect");
    }

    // Validation for Phone Number
    if (!number_input.value.trim()) {
        errors.push("Phone number required");
        number_input.parentElement.classList.add("incorrect");
    }

    return errors;
}

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Remove error styling when user starts typing
[fullname_input, email_input, number_input].forEach((input) => {
    input.addEventListener("input", () => {
        const parent = input.parentElement;
        if (parent.classList.contains("incorrect")) {
            parent.classList.remove("incorrect");
            error_message.innerText = "";
        }
    });
});