import { auth, signInWithEmailAndPassword } from "../firebaseConfig.js";

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('UserEmail').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (user) {
                console.log("sign in ", user);

            }      // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    console.log('Login attempt with username:', email, 'and password:', password);

    // Here, you would typically send these values to the server for authentication
    // For example, using fetch() to make an AJAX request.
});
