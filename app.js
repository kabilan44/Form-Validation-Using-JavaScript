let n;
//Username
function nameval() {
    n = document.getElementById("username").value;
    let o = /^[A-Za-z][A-Za-z0-9_]{2,29}$/
    if (n == "") {
        document.getElementById("usernameer").innerHTML = "Please Enter Your Name"
        document.getElementById("username").style.border = " 2px solid red"
    }
    else if (!o.test(n)) {
        document.getElementById("usernameer").innerHTML = "Please Enter a Valid Name"
        document.getElementById("username").style.border = " 2px solid red"
    }
    else {
        document.getElementById("usernameer").innerHTML = ""
        document.getElementById("username").style.border = " 2px solid green"
    }
}
//Email
function emailval() {
    e1 = document.getElementById("email").value;
    let f = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (e1 == "") {
        document.getElementById("emailer").innerHTML = "Please Enter Your Email"
        document.getElementById("email").style.border = " 2px solid red"
    }
    else if (!f.test(e1)) {
        document.getElementById("emailer").innerHTML = "Please Enter a Valid Email"
        document.getElementById("email").style.border = "2px solid red"
    }
    else {
        document.getElementById("emailer").innerHTML = ""
        document.getElementById("email").style.border = "2px solid green"
    }
}
//Date of Birth
function dobval() {
    d = document.getElementById("dob").value;
    if (d == "") {
        document.getElementById("dober").innerHTML = "Please Enter Your DOB"
        document.getElementById("dob").style.border = "2px solid red"
    }
    else {
        document.getElementById("dober").innerHTML = ""
        document.getElementById("dob").style.border = "2px solid green"
    }
}
//Mobile number
function mobileval() {
    m = document.getElementById("mobile").value;
    let v = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
    if (m == "") {
        document.getElementById("mobileer").innerHTML = "Please Enter Your Mobile Number"
        document.getElementById("mobile").style.border = "2px solid red"
    }
    else if (!v.test(m)) {
        document.getElementById("mobileer").innerHTML = "Please Enter a Valid Mobile Number"
        document.getElementById("mobile").style.border = "2px solid red"
    }
    else {
        document.getElementById("mobileer").innerHTML = ""
        document.getElementById("mobile").style.border = "2px solid green"
    }
}

//Gender
function genderval() {
    g = document.querySelector(["input[name=gender]:checked"]);
    if (g === null) {
        document.getElementById("genderer").innerHTML = "Choose Your Gender"
    }
    else {
        document.getElementById("genderer").innerHTML = ""
    }
}
//Password
function passwordval() {
    p = document.getElementById("password").value;
    let q = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/
    if (p == "") {
        document.getElementById("passworder").innerHTML = "Please Enter Your Password"
        document.getElementById("password").style.border = "2px solid red"
    }
    else if (!q.test(p)) {
        document.getElementById("passworder").innerHTML = "Please Enter a Valid Password"
        document.getElementById("password").style.border = "2px solid red"
    }
    else {
        document.getElementById("passworder").innerHTML = ""
        document.getElementById("password").style.border = "2px solid green"
    }
}
//Confirm Password
function password2val() {
    p2 = document.getElementById("password2").value;
    if (p2 == "") {
        document.getElementById("password2").style.border = "2px solid red"
        document.getElementById("password2er").innerHTML = "Please Enter Your Confirm Password"
    }
    else if (p2 == p) {
        document.getElementById("password2er").innerHTML = ""
        document.getElementById("password2").style.border = "2px solid green"
    }
    else {
        document.getElementById("password2").style.border = "2px solid red"
        document.getElementById("password2er").innerHTML = "Please Confirm Your Password"

    }
}
//Checkbox
function checkboxval() {
    cb = document.getElementById("checkbox").checked;
    if (cb == "") {
        document.getElementById("checkboxer").innerHTML = "Please agree to submit"
    }
    else {
        document.getElementById("checkboxer").innerHTML = ""

    }
}
//Submit
function validate() {
    nameval();
    emailval();
    dobval();
    genderval();
    mobileval();
    passwordval();
    password2val();
    checkboxval();

    console.log(n);
    console.log(e1);
    console.log(d);
    console.log(m);
    console.log(g);
    console.log(p);



}
form.addEventListener("submit", z => {
    z.preventDefault();
});