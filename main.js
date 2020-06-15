const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirm_passwordInput = document.getElementById("confirm_password");


// Form submit event listener
form.addEventListener("submit",(e) => {

    // Validate Username for empty field
    if(usernameInput.value.trim() === "")
        setInvalid(usernameInput,"Username cannot be blank");
    else
        setValid(usernameInput,"Looks good");


    // Validate email for empty field and correct formatting using regex
    if(emailInput.value.trim() === "")
        setInvalid(emailInput,"Email cannot be blank");
    else{
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(emailRegex.test(emailInput.value.trim()) == false)
            setInvalid(emailInput,"Incorrect email");
        else
            setValid(emailInput,"Looks good");
    }

    // Validate password for empty field
    if(passwordInput.value.trim() === "")
        setInvalid(passwordInput,"Password cannot be blank");
    else{
        // Validate password with regex
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        const errorMessage = `- at least 8 characters
        - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
        - Can contain special character`;

        if(passwordRegex.test(passwordInput.value.trim()) == false)
            setInvalid(passwordInput,errorMessage);
        else
            setValid(passwordInput,"Looks good");

    }
    
    // Validate confirm password for empty field and password match
    if(confirm_passwordInput.value.trim() === "")
        setInvalid(confirm_passwordInput,"Password cannot be blank");
    else
        if(confirm_passwordInput.value.trim() !== passwordInput.value.trim())
            // Passwords do NOT MATCH
            setInvalid(confirm_passwordInput,"Passwords do not match");
        else
            // Passwords are equal
            setValid(confirm_passwordInput,"Passwords match");


    e.preventDefault();
});

//Function to set invalid feedback
function setInvalid(element,message){
    element.className = "form-control is-invalid";
    element.parentElement.getElementsByClassName("invalid-feedback")[0].innerText = message;
}

//Function to set valid feedback
function setValid(element,message){
    element.className = "form-control is-valid";
    element.parentElement.getElementsByClassName("valid-feedback")[0].innerText = message;
}