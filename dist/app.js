import Check from "./check.js";

const email = document.getElementById('email');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitBtn = document.getElementById('submit-btn');

const inputs = [email, zipCode, password, password2];

inputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        const input = e.target.id;
        checkField(input);
    });
    input.addEventListener('keypress', (e) => {
        const input = e.target.id;
        checkField(input);
    });
});

function checkField(input) {
    switch(input) {
        case 'email':
            Check.checkEmail();
            break;
        case 'zip-code':
            Check.checkZip();
            break;
        case 'password':
            Check.checkPass();
            break;
        case 'password2':
            Check.checkPass2();
            break;
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Check.checkAll();
});