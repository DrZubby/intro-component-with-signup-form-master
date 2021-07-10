const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const submit = document.querySelector("button");
const form = document.querySelector("form");

const firstNameSpan = document.querySelector("#first-name + img + .error-message");
const lastNameSpan = document.querySelector("#last-name + img + .error-message");
const emailSpan = document.querySelector("#email + img +  .error-message");
const passwordSpan = document.querySelector("#password + img + .error-message");


function displayErrorImage(error) {
    document.querySelector("#" + error + "+ img").style.visibility = "visible";

    //error example = "first-name"
    //document.querySelector("#first-name + img").style.visibility("visible")
}

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

function displaySuccess(spanText, inputType, error) {
    spanText.textContent = "";
    inputType.classList.remove("invalid");
    document.querySelector("#" + error + "+ img").style.visibility = "hidden";
}

function validateEmail() {
    console.log("I am typing")
    if (email.value.matches = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
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
        displayError(firstName, "First name", firstNameSpan);
        displayErrorImage("first-name")
    } else {
        displaySuccess(firstNameSpan, firstName, "first-name")
    }

    if (lastName.value === "") {
        displayError(lastName, "Last name", lastNameSpan);
        displayErrorImage("last-name")
    } else {
        displaySuccess(lastNameSpan, lastName, "last-name")
    }

    if (email.value === "") {
        displayError(email, "email", emailSpan);
        displayErrorImage("email")
    } else if (validateEmail() === false) {
        spanText.textContent = "Looks like this is not an email";
    } else {
        displaySuccess(emailSpan, email, "email")
    }

    if (password.value === "") {
        displayError(password, "Password", passwordSpan);
        displayErrorImage("password")
    } else if (password.value.length < 6) {
        spanText.textContent = "Password is too short. it should be at least 6 characters";
    } else if (password.value.length > 15) {
        spanText.textContent = "Password is too long. it should not be more than 15 characters";
    } else {
        displaySuccess(passwordSpan, password, "password")
    }
})

window.addEventListener("load", ()=> {
    let width = window.innerWidth;
    let errorMargin = document.querySelectorAll(".error-message");
    for (let i=0; i<errorMargin.length; i++) {
    if (width <= 1371) {
        errorMargin[i].style.marginLeft = "25em"
    } else if (width <= 1300) {
        errorMargin[i].style.marginLeft = "0em"
    } else if (width <= 1161) {
        errorMargin[i].style.marginLeft = "0em";
        errorMargin[i].style.marginRight = ".5em"
    } else {
        errorMargin[i].style.marginLeft = "28em"
    }
}
})