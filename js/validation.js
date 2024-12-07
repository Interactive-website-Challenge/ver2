const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) =>{
    // e.preventDefault()
    let errors = [];

    if(firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    } else {
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if(errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ")
    }


}) 

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];

    if(firstname === "" || firstname == null) {
        errors.push("First name required");
        firstname_input.parentElement.classList.add("incorrect"); /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(email === "" || email == null) {
        errors.push("Email required");
        email_input.parentElement.classList.add("incorrect"); /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(password === "" || password == null) {
        errors.push("Password required");
        password_input.parentElement.classList.add("incorrect"); /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(repeatPassword === "" || repeatPassword  == null) {
        errors.push("Password Repeat required");
        repeat_password_input.parentElement.classList.add("incorrect"); /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    return errors;

}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input];

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        if(input.parentElement.classList.contains("incorret")){
            input.parentElement.classList.remove("incorrect");
        }
    })
})