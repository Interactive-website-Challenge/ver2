const form = document.getElementById("form");
const fullname_input = document.getElementById("name");
const email_input = document.getElementById("email");
const number_input = document.getElementById("phone");
const message_input = document.getElementById("message");
const error_message = document.getElementById("error-message");



form.addEventListener("submit", (e) =>{
    let errors = [];

    if(fullname_input) {
        errors = getBookFormErrors(fullname_input.value, email_input.value, number_input.value);
    } else {
        errors = getContactFormErrors(email_input.value, password_input.value);
    }

    if(errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ")
    }


}) 

function getBookFormErrors(fullname, email, number) {
    let errors = [];

    if(fullname === "" || fullname == null) {
        errors.push("Full name required");
        fullname_input.parentElement.classList.add("incorrect"); /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(email === "" || email == null) {
        errors.push("Email required");
        email_input.parentElement.classList.add("incorrect"); 
    }

    if(number === "" || number == null) {
        errors.push("Number required");
        number_input.parentElement.classList.add("incorrect"); 
    }
    
    return errors;

}

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

const allInputs = [fullname_input, email_input, number_input, message_input].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        if(input.parentElement.classList.contains("incorrect")){
            input.parentElement.classList.remove("incorrect");
            error_message.innerText = "";
        }
    })
})

