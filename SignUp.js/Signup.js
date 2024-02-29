import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../firebaseConfig.js";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user.uid);

      // Use the user's UID to create a document in the "users" collection
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        uid: user.uid
      });

      console.log("Document written with UID: ", user.uid);
      locationChange()

    } catch (error) {
      console.error("Error adding document: ", error);
    }

    console.log("Creating user with the following details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Add your AJAX request or form handling logic here
  });
});


function locationChange(){
  window.location.href  = "/SignIn/SignIn.html"
}