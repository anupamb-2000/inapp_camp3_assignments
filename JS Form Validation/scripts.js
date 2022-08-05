var checkEmpty = function (field) {
    if (field == "") {
        return false;
    }
    return true;
}

var validate = function (event) {
    let name = document.getElementById("name");
    console.log(name.value);
    let email = document.getElementById("email");
    console.log(email.value);
    let phone = parseInt(document.getElementById("phone"));
    console.log(phone.value);
    let pswd1 = document.getElementById("pswd1");
    console.log(pswd1.value);
    let pswd2 = document.getElementById("pswd2");
    console.log(pswd2.value);
    let flname =  checkEmpty(name);
    let flemail = checkEmpty(email);
    let flphone = checkEmpty(phone);
    let flpswd1 = checkEmpty(pswd1);
    let flpswd2 = checkEmpty(pswd2);
}
