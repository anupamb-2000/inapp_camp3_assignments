const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pswd1 = document.getElementById("pswd1");
const pswd2 = document.getElementById("pswd2");

console.log("Inside scripts.js")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Inside eventListener");
    checkInputs();
});

function checkInputs() {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const pswdValue = pswd1.value.trim();
    const pswd2Value = pswd2.value.trim();

    if(nameValue === '') {
        setErrorFor(username, 'Name cannot be blank');
    }else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    }else{
        setSuccessFor(email);
    }

    if(phoneValue === '') {
        setErrorFor(phone, 'Phone number cannot be blank');
    }else if(!phoneValue.match(/^\d{10}$/)) {
        setErrorFor(phone, "Phone number is not valid")
    }else {
        setSuccessFor(phone);
    }

    if(pswdValue === '') {
        setErrorFor(pswd1, 'Password cannot be blank');
    }else if (!(pswd2Value.length >= 6 && pswd2Value.length <= 20)) {
        setErrorFor(pswd1, 'Password must be 6-20 characters long');
    }else {
        setSuccessFor(pswd1);
    }

    if(pswd2Value === '') {
        setErrorFor(pswd2, 'Password cannot be blank');
    }else if (pswdValue !== pswd2Value) {
        setErrorFor(pswd2, 'Passwords do not match');
    }else {
        setSuccessFor(pswd2);
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        small.innerText = message;

        formControl.className = "form-control err";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

}