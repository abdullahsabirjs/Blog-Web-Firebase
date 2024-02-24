import { auth, createUserWithEmailAndPassword } from "../firebaseConfig.js";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user,"user >>>>>>>>>>>>>>>>>>");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
        console.log("Creating user with the following details:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);

        // Add your AJAX request or form handling logic here
    });
});

