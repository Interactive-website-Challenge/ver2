const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");

form.addEventListener("sumbit", (e) =>{
    // e.preventDefault()
    let errors = []

    if(firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    } else {
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }
}) 

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];

    if(firstname === "" || firstname == null) {
        errors.push("Firstname is required");
        firstname_input.parentElement.classList.add("incorrect") /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(email === "" || email == null) {
        errors.push("Email is required");
        firstname_input.parentElement.classList.add("incorrect") /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(password === "" || password == null) {
        errors.push("Password is required");
        firstname_input.parentElement.classList.add("incorrect") /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(repeatPassword === "" || repeatPassword  == null) {
        errors.push("Password Repeat is required");
        firstname_input.parentElement.classList.add("incorrect") /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

}