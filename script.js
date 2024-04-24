const regForm = document.getElementById('registration');
const logForm = document.getElementById('login');

const usernameInput = regForm.elements["username"];
const email = regForm.elements["email"];
const password = regForm.elements["password"];
const regRepatPassword = regForm.elements["passwordCheck"];

console.log(regForm);

// ==========================Registration form validation================================
regForm.addEventListener("submit" , validate);

function validate(e){
    const valUsername = validateUsername();
    if(valUsername === false){
        e.preventDefault();
        e.returnValue = false;
        return false;
    }

    const valEmail = validEmail();
    if(valEmail === false){
        e.preventDefault();
        e.returnValue = false;
        return false;
    }


    const valPassword = validPassword();
    // if(valPassword === false){
    //     e.preventDefault();
    //     e.returnValue = false;
    //     return false;
    // }
    const valRepeatPassword = validRepeatPassword();
    // if(valRepeatPassword === false){
    //     e.preventDefault();
    //     e.returnValue = false;
    //     return false;
    // }
    // Password and Repeat Password match
    if (valRepeatPassword !== valPassword) {
        alert('Passwords do not match');
        return false;
      } else {
        return true;
      }
};

function validateUsername (){ 
    if(usernameInput.value === ""){ // The username cannot be blank.
        alert("Please provide a name.");
        usernameInput.focus();
    return false;
    }

    if (usernameInput.length < 4) { //The username must be at least four characters long.
        alert("Username must be at least four characters long.");
        usernameInput.focus();
        return false;        
    }

    let uniqueChars = new Set(usernameInput.value); 
    if (uniqueChars.size < 2) { //The username must contain at least two unique characters.
        alert("Username must contain at least two unique characters.");
        usernameInput.focus();
        return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(usernameInput.value)) { // The username cannot contain any special characters or whitespace.
        alert("Username cannot contain any special characters or whitespace.");
        usernameInput.focus();
        return false;
    }
  return true;
}

function validEmail(){
    const emailVal = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailVal)) { //The email must be a valid email address.
        alert("Email must be a valid email address.");
        emailVal.focus();
        return false;
    }

    if (emailVal.toLowerCase().endsWith('@example.com')) { //The email must not be from the domain "example.com."
        alert("Email cannot be from the domain 'example.com'.");
        emailVal.focus();
        return false;
    }

//     const atpos = emailVal.indexOf("@");
//     const dotpos = emailVal.lastIndexOf(".");

//     if (atpos < 1 || dotpos - atpos < 2) {
//     alert("Your email must include an @ symbol which must not be at the         beginning of the email.");
//     email.focus();
//     return false;
//   }

    return true;
}

function validPassword(password, usernameInput){
    if (password.length < 12) { //Passwords must be at least 12 characters long.
        alert("Password must be at least 12 characters long.");
        password.focus();
        return false;
    }

    if (!/[A-Z]/.test(password)) { //Passwords must have at least one uppercase letter.
        alert("Password must contain at least one uppercase letter.");
        password.focus();
        return false;
    }

    if (!/[a-z]/.test(password)) {//Passwords must have at least one lowercase letter.
        alert("Password must contain at least one lowercase letter.");
        password.focus();
        return false;
    }

    if (!/\d/.test(password)) { //Passwords must contain at least one number.
        alert("Password must contain at least one number.");
        password.focus();
        return false;
    }

    if (!/[^a-zA-Z0-9]/.test(password)) { //Passwords must contain at least one special character.
        alert("Password must contain at least one special character.");
        password.focus();
        return false;
    }

    if (password.toLowerCase().includes('password')) { //Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
        alert("Password cannot contain the word 'password'.");
        password.focus();
        return false;
    }

    if (password.toLowerCase().includes(usernameInput.toLowerCase())) { // Passwords cannot contain the username.
        alert("Password cannot contain the username.");
        password.focus();
        return false;
    }
    
    return true;
}
function validRepeatPassword() {
    if (regRepatPassword.value === "") {
        alert("Please repeat the password.");
        regRepatPassword.focus();
        return false;
    }
    return true;
}

// ==========================Loging form validation================================
logForm.addEventListener("submit" , validateLoginForm);

function validateLoginForm(e){
    e.preventDefault();

    const username = usernameInput.value.toLowerCase(); 
    if (usernameInput === "") {
        alert("Username cannot be blank.");
        usernameInput.focus();
        return;
    }
   

    const password = password.value;
    if (password === "") {
        alert("Password cannot be blank.");
        password.focus();
        return;
    }
 

    // / Form submission successful
    clearLoginFormFields();
    displayLoginSuccessMessage(rememberMeCheckbox.checked);

}
// Function to clear login form fields
function clearLoginFormFields() {
    usernameInput.value = "";
    password.value = "";
    rememberMeCheckbox.checked = false;
}

// Function to display login success message
function displayLoginSuccessMessage(rememberMeChecked) {
    let message = "Login successful.";
    if (rememberMeChecked) {
        message += " You are logged in permanently.";
    }
    alert(message);
}








