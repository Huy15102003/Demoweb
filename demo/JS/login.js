// function validateEmail() {
//     let email = document.getElementById("email").value;
//     let emailPartern = /^[a-z0-9A-Z]+\@+gmail+\.+(com|vn)$/;
//     let check = emailPartern.test(email);
//     console.log(check);
//     if (check == true) {
//         let emailContainer = document.getElementById("email-container");
//         emailContainer.style.border = "1px solid blue";
//         let errEmail = document.getElementById("error-email");        
//         document.getElementById("error-email").innerText = "Email is valid";
//         errEmail.style.color = "blue";
//     }else{
//         emailContainer.style.border = "1px solid red";
//         document.getElementById("error-email").innerText = "Email is not valid";
//         errEmail.style.color = "red";
//     }
// }

$(document).ready(() => {
    $("#email").on("input", (event) => {
        let email = $("#email").val();
        let emailPartern = /^[a-z0-9A-Z]+\@+gmail+\.+(com|vn)$/;
        let check = emailPartern.test(email);
        let emailContainer = $("#email-container");
        let errEmail = $("#error-email");     
        if (check == true) {            
            emailContainer.css("border", "1px solid blue");   
            errEmail.text("");
        }else{
            emailContainer.css("border", "1px solid red");
            document.getElementById("error-email").innerText = "Email is not valid";
            errEmail.css("color", "red");
        }
    });
});

$(document).ready(() => {
    $("#password").on("input", (event) => {
        let pwd = $("#password").val();
        console.log(pwd);
        let pwdPattern = /^[a-zA-z0-9]{6,12}$/
        let check = pwdPattern.test(pwd);
        let pwdContainer = $("#password-container");
        let errPwd = $("#error-pwd");
        if (check == true) {
            pwdContainer.css("border", "1px solid blue");
            errPwd.text("");
        } else {
            pwdContainer.css("border", "1px solid red");
            errPwd.text("Password must be 6-12 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
            errPwd.css("color", "red");
        }
    });
});

$(document).ready(() => {
    $("#toggle-password").on("click", (event) => {
        let pwd = $("#password");
        let currentType = pwd.attr("type");
        let iconEye = $("#eye-icon");
        if(currentType == "password") {
            pwd.attr("type", "text");
            iconEye.attr("src", "../IMG/eye-icon.png");
        } else {
            pwd.attr("type", "password");
            iconEye.attr("src", "../IMG/eyeclose-icon.png");
        }
    });
});
