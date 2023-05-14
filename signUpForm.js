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
        inputWrapper.classList.add('success');
        inputWrapper.classList.remove('error');
    } else {
        inputWrapper.classList.add('error');
        inputWrapper.classList.remove('success');
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
    if (firstNameInput.parentElement.classList.contains('success') || firstNameInput.parentElement.classList.contains('error')) {
        nameValidation(firstNameInput);
    }
})

lastNameInput.addEventListener('input', () => {
    if (lastNameInput.parentElement.classList.contains('success') || lastNameInput.parentElement.classList.contains('error')) {
        nameValidation(lastNameInput);
    }
})

emailInput.addEventListener('input', () => {
    if (emailInput.parentElement.classList.contains('success') || emailInput.parentElement.classList.contains('error')) emailValidation();
})

phoneNumberInput.addEventListener('input', () => {
    if (phoneNumberInput.parentElement.classList.contains('success') || phoneNumberInput.parentElement.classList.contains('error')) phoneNumberValidation();
})

passwordInput.addEventListener('input', () => {
    if (passwordInput.parentElement.classList.contains('success') || passwordInput.parentElement.classList.contains('error')) passwordValidation();
})

confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.parentElement.classList.contains('success') || confirmPasswordInput.parentElement.classList.contains('error')) confirmPasswordValidation();
})



firstNameInput.addEventListener('blur', () => {
    nameValidation(firstNameInput);
})

lastNameInput.addEventListener('blur', () => {
    nameValidation(lastNameInput);
})

emailInput.addEventListener('blur', () => {
    emailValidation();
})

phoneNumberInput.addEventListener('blur', () => {
    phoneNumberValidation();
})

passwordInput.addEventListener('blur', () => {
    passwordValidation();
})

confirmPasswordInput.addEventListener('blur', () => {
    confirmPasswordValidation();
})

