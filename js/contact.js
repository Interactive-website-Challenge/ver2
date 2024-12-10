const form = document.getElementById("form");
const fullname_input = document.getElementById("name");
const email_input = document.getElementById("email");
const number_input = document.getElementById("phone");
const message_input = document.getElementById("message");
const error_message = document.getElementById("error-message");



form.addEventListener("submit", (e) =>{
    let errors = [];

    errors = getContactFormErrors(email_input.value, password_input.value);

    if(errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ")
    }


}) 


function getContactFormErrors(fullname, email, number, message) {
    let errors = [];
    if(fullname === "" || fullname == null){
        errors.push("Email required");
        email_input.parentElement.classList.add("incorrect");
    }

    if(email === "" || email == null) {
        errors.push("Email required");
        email_input.parentElement.classList.add("incorrect"); 
    }

    if(number === "" || number == null) {
        errors.push("Number required");
        number_input.parentElement.classList.add("incorrect"); 
    }

    if(message === "" || message == null) {
        errors.push("Message required");
        message_input.parentElement.classList.add("incorrect"); 
    }

    return errors;
}

const allInputs = [fullname_input, email_input, number_input];

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        if(input.parentElement.classList.contains("incorrect")){
            input.parentElement.classList.remove("incorrect");
            error_message.innerText = "";
        }
    })
})

