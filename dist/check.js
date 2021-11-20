
  ////////////////////////////
 // Check fields functions //
////////////////////////////

export default class Check {
    static checkAll() {
        this.checkEmail();
        this.checkZip();
        this.checkPass();
        this.checkPass2();
    }
    // Email 
    static checkEmail() {
        const email = document.getElementById('email');
        if (email.value === '') {
            this.setError(email, 'You cannot leave this field blank');
        } else if (!this.isEmail(email.value)) {
            this.setError(email, 'Not a valid email');
        } else {
            this.setSuccess(email);
        }
    }
    // Zip code 
    static checkZip() {
        const zipCode = document.getElementById('zip-code');
        if (zipCode.value === '') {
            this.setError(zipCode, 'You cannot leave this field blank');
        } else if (!this.isZipCode(zipCode.value)) {
            this.setError(zipCode, 'Zip code is too long');
        } else if (!this.isNumber(zipCode.value)) {
            this.setError(zipCode, 'numbers only please');
        } else {
            this.setSuccess(zipCode);
        }
    }
    // Password 
    static checkPass() {
        const password = document.getElementById('password');
        if (password.value === '') {
            this.setError(password, 'You cannot leave this field blank');
        } else {
            this.setSuccess(password);
        }
    }
    // Password confirmation 
    static checkPass2() {
        const password2 = document.getElementById('password2');
        if (password2.value === '') {
            this.setError(password2, 'You cannot leave this field blank');
        } else if (password2.value !== password.value) {
            this.setError(password2, 'Passwords do not match');
        } else {
            this.setSuccess(password2);
        }
    }
    // Display success styling 
    static setSuccess(input) {
        const parentElement = input.parentElement;
        parentElement.className = 'form success';
        const errorMsg = parentElement.querySelector('small');
        errorMsg.style.display = 'none';
    }
    // Display error styling
    static setError(input, message) {
        const parentElement = input.parentElement;
        const errorMsg = parentElement.querySelector('small');
        parentElement.className = 'form error'; 
        errorMsg.style.display = 'block';
        errorMsg.textContent = message;
    }
    // Check for valid email
    static isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    // Check if zip code is too long
    static isZipCode(zipcode) {
        return zipcode.length > 10 ? false : true; 
    }
    static isNumber(zipcode) {
        return /^[0-9]*$/.test(zipcode); 
    }
}