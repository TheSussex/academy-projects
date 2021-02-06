const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const age = document.querySelector('#age');
const nameErrorMsg = document.querySelectorAll('.name-error-msg');
const ageErrorMsg = document.querySelector('#age-error-msg');
const submitButton = document.querySelector('#submit-btn');


function validateForm() {
    if (firstName.value === "" || lastName.value === "") {
        nameErrorMsg.removeAttribute('hidden')
        nameErrorMsg.innerHTML = "Field cannot be blank"
    };
}

function myFunction(e) {
    e.preventDefault();
}

submitButton.addEventListener('click', myFunction);
submitButton.addEventListener('click', validateForm);
