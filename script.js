const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submit = document.querySelector("button");

const firstNameSpan = document.querySelector("#first-name + .error-message");
const lastNameSpan = document.querySelector("#last-name + .error-message");
const emailSpan = document.querySelector("#email + .error-message");
const passwordSpan = document.querySelector("#password + .error-message");

const form = document.querySelector("form");

function displayError(inputType, message, spanText) {
    inputType.classList.add("invalid");
    if (inputType === email) {
        spanText.textContent = "Looks like this is not an email"
    } else {
        spanText.textContent = `${message} cannot be empty`
    }
    //inputType example = firstName
    //message example = "first name"
    //spanText example = firstNameError
}

function displaySuccess(spanText, inputType) {
    spanText.textContent = "";
    inputType.classList.remove("invalid");
}

function validateEmail() {
    console.log("I am typing")
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value)) {
        console.log(form.email.value, " the email is correct");
        return true
    } else {
        console.log(form.email.value, " the email is wrong")
        return false;
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (firstName.value === "") {
        displayError(firstName, "First name", firstNameSpan)
    } else {
        displaySuccess(firstNameSpan, firstName)
    }

    if (lastName.value === "") {
        displayError(lastName, "Last name", lastNameSpan)
    } else {
        displaySuccess(lastNameSpan, lastName)
    }

    if (email.value === "") {
        displayError(email, "email", emailSpan)
    } else if (validateEmail() === false) {
        spanText.textContent = "please type in a valid email address";
    } else {
        displaySuccess(emailSpan, email)
    }

    if (password.value === "") {
        displayError(password, "Password", passwordSpan)
    } else if (password.value.length < 6) {
        spanText.textContent = "password is too short. it should be at least 6 characters";
    } else if (password.value.length > 15) {
        spanText.textContent = "password is too long. it should not be more than 15 characters";
    } else {
        displaySuccess(passwordSpan, password)
    }
})