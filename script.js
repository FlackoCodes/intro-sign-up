const claimButton = document.querySelector('.claim-btn');

const fisrtName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const firstNameError = document.querySelector('.error-fname');
const lastNameError = document.querySelector('.error-lname');
const emailError = document.querySelector('.error-email');
const passwordError = document.querySelector('.error-password');

const fisrtNameImage = document.querySelector('.first-name-error-image');
const lastNameImage = document.querySelector('.last-name-error-image');
const emailImage = document.querySelector('.email-error-image');
const passwordImage = document.querySelector('.password-error-image');

function checkError(inputField, errorMessage, errorImage) {
    if (inputField.value == "") {
        inputField.style.border = '1px solid hsl(0, 100%, 74%)';
        errorMessage.style.display = 'block';
        errorImage.style.display = 'block';
    } 
}

function validateEmail(emailField, errorMessage, errorImage) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailField.value.match(emailPattern)) {
        emailField.style.border = '1px solid hsl(0, 100%, 74%)';
        errorMessage.style.display = 'block';
        errorImage.style.display = 'block';
    } 
}

claimButton.addEventListener('click', ()=>{
    checkError(fisrtName, firstNameError, fisrtNameImage)
    checkError(lastName, lastNameError, lastNameImage)
    checkError(password, passwordError, passwordImage)
    validateEmail(email, emailError, emailImage)
})