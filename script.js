'use strict';
const formEL = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const conform_password = document.getElementById('conform_password');


function setError(input, error) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form_control error";
    small.innerText = error;
}
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success";
}
function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function checkInput() {
    const userName = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const conformpPasswordValue = conform_password.value.trim();

    if (userName === '') {
        setError(username, "Username cannot be empty");
    }
    else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "email connot be empty");
    }
    else if (!isEmail(emailValue)) {
        setError(email, "Not a valid email");
    }
    else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, "password cannot be empty");
    }
    else {
        setSuccess(password);
    }

    if (conformpPasswordValue === "") {
        setError(conform_password, "password cannot be empty");
    }
    else if (conformpPasswordValue !== passwordValue) {
        setError(conform_password, "mismatched")
    }
    else {
        setSuccess(conform_password);
    }

}


formEL.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})