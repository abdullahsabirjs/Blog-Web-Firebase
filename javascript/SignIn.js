import { auth, signInWithEmailAndPassword, db, doc, getDoc } from "./firebaseConfig.js";

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('UserEmail').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Signed in user:", user.uid);

        // Fetch the user document from the "users" collection using the UID
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            // console.log("User document data:", userDocSnap.data());
            let {uid,email,name} = userDocSnap.data()
            // console.log(uid);
            // console.log(email);
            // console.log(name);
            localStorage.setItem("user",
                uid
            )
            changePage()
            
        } else {
            console.error("No such document for the user!");
        }
    } catch (error) {
        console.error("Error signing in:", error.message);
    }

    console.log('Login attempt with email:', email, 'and password:', password);
});


function changePage() {
    console.log("Page  is  run");
    window.location.href = "home.html"
}