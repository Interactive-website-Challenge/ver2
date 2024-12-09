const first_form = document.getElementById("first-part");
const fullname_input = document.getElementById("name");
const email_input = document.getElementById("email");
const number_input = document.getElementById("number");
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
        errors.push("Password required");
        password_input.parentElement.classList.add("incorrect"); 
    }

    if(repeatPassword === "" || repeatPassword  == null) {
        errors.push("Repeated Password required");
        repeat_password_input.parentElement.classList.add("incorrect"); 
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

function getContactFormErrors(email, password) {
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

