const form = document.querySelector('form');

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phone-number');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');


function displayValidation(input, message = '') {
    const inputWrapper = input.parentElement

    if (!message) {
        inputWrapper.classList.remove('error');
    } else {
        inputWrapper.classList.add('error');
    }

    inputWrapper.querySelector('.error-message').textContent = message;
}

function nameValidation(nameInput) {
    const value = nameInput.value.trim();

    if (!value) {
        displayValidation(nameInput, 'Field cannot be empty');
    } else if (value.length <= 2) {
        displayValidation(nameInput, 'Name must be over 2 characters');
    } else {
        displayValidation(nameInput);
    }
}

function emailValidation() {
    const value = emailInput.value.trim();
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!value) {
        displayValidation(emailInput, 'Field cannot be empty');
    } else if (!regexEmail.test(value)) {
        displayValidation(emailInput, 'Invalid email format');
        console.log('cool');
    } else {
        displayValidation(emailInput);
    }
}

function phoneNumberValidation() {
    const value = phoneNumberInput.value.trim();
    const regexPhoneNumber = /^\d{10}$/

    if (!value) {
        displayValidation(phoneNumberInput);
    } else if (!regexPhoneNumber.test(value)) {
        displayValidation(phoneNumberInput, 'Invalid phone number');
    } else {
        displayValidation(phoneNumberInput);
    }
}

function passwordValidation() {
    const value = passwordInput.value;

    if (!value) {
        displayValidation(passwordInput, 'Field cannot be empty');
    } else if (value.length < 8) {
        displayValidation(passwordInput, 'Password should be over 8 characters');
    } else {
        displayValidation(passwordInput);
    }
}

function confirmPasswordValidation() {
    const value = confirmPasswordInput.value;

    if (value !== passwordInput.value) {
        displayValidation(confirmPasswordInput, "Password doesn't match");
    } else {
        displayValidation(confirmPasswordInput);
    }
}


form.addEventListener('submit', e => {
    e.preventDefault();

    nameValidation(firstNameInput);
    nameValidation(lastNameInput);
    emailValidation();
    phoneNumberValidation();
    passwordValidation();
    confirmPasswordValidation();

})

firstNameInput.addEventListener('input', () => {
    nameValidation(firstNameInput);
})

lastNameInput.addEventListener('input', () => {
    nameValidation(lastNameInput);
})

// emailInput.addEventListener('input', emailValidation)
// phoneNumberInput.addEventListener('input', phoneNumberValidation)
// passwordInput.addEventListener('input', passwordValidation)
// confirmPasswordInput.addEventListener('input', confirmPasswordValidation)
