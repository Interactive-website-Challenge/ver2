const form = document.getElementById("form");
const fullname_input = document.getElementById("fullname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");
const special_characters = ["!","@","#","$","%","^","&","*"];


form.addEventListener("submit", (e) =>{
    let errors = [];

    if(fullname_input) {
        errors = getSignupFormErrors(fullname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    } else {
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if(errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ")
    }


}) 

function getSignupFormErrors(fullname, email, password, repeatPassword) {
    let errors = [];

    if(fullname === "" || fullname == null) {
        errors.push("Full name required");
        fullname_input.parentElement.classList.add("incorrect"); /*after error occurs, this adds the class incorrect to the div, which activates the css 
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
        errors.push("Repeated Password required");
        repeat_password_input.parentElement.classList.add("incorrect"); /*after error occurs, this adds the class incorrect to the div, which activates the css 
        code for the incorrect class*/
    }

    if(password !== repeatPassword){
        errors.push("Repeated password does not match password")
        password_input.parentElement.classList.add("incorrect");
        repeat_password_input.parentElement.classList.add("incorrect");
    }

    if(password.length < 12){
        errors.push("Password must contain at least 12 characters");
        password_input.parentElement.classList.add("incorrect");

    }

    let count = 0;
    for(let j = 0; j < special_characters.length; j++){
            if(password.includes(special_characters[j])){
                count +=1
            } 
        }
    if(count === 0){
                errors.push("Password must contain a special character");
                password_input.parentElement.classList.add("incorrect");
            }
    
    return errors;

}

function getLoginFormErrors(email, password) {
    let errors = [];
    if(email === "" || email == null){
        errors.push("Email required");
        email_input.parentElement.classList.add("incorrect");
    }

    if(password === "" || password == null){
        errors.push("Password required");
        password_input.parentElement.classList.add("incorrect");
    }
    return errors;
}

const allInputs = [fullname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        if(input.parentElement.classList.contains("incorrect")){
            input.parentElement.classList.remove("incorrect");
            error_message.innerText = "";
        }
    })
})

