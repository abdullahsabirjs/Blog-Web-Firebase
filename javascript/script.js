// // Check login status and update button visibility on page load
// document.addEventListener("DOMContentLoaded", function() {
//   updateLoginStatus();
// });

import { collection, db, doc, getDoc, getDocs } from "./firebaseConfig.js";

// // Function to check login status and update button visibility
// function updateLoginStatus() {
//   var isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//   var dashboardButton = document.getElementById('dashboardButton');
//   var writeBlogButton = document.getElementById('writeBlogButton');
//   var loginButton = document.getElementById('loginButton');

//   if (isLoggedIn) {
//       dashboardButton.style.display = 'inline-block';
//       writeBlogButton.style.display = 'inline-block';
//       loginButton.style.display = 'none';
//   } else {
//       dashboardButton.style.display = 'none';
//       writeBlogButton.style.display = 'none';
//       loginButton.style.display = 'inline-block';
//   }
// }

// // Function to handle user login
// async function loginUser(email, password) {
//   try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("Signed in user:", user.uid);

//       // Set login status in localStorage
//       localStorage.setItem("isLoggedIn", "true");

//       // Update button visibility based on login status
//       updateLoginStatus();

//       // Redirect to home page
//       window.location.href = "./home.html";
//   } catch (error) {
//       console.error("Error signing in:", error.message);
//   }
// }

// // Function to handle user logout
// function logoutUser() {
//   localStorage.removeItem("isLoggedIn");
//   updateLoginStatus();
//   window.location.href = "SignIn.html";
// }

const querySnapshot = await getDocs(collection(db, "allBlogData"));

  querySnapshot.forEach(async(docu) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  let { Category, Description, Status, Title, Type, uid,dateExample } = docu.data();
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  let  userEmail 
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data()),">>>>>>>>>>>>>>>>>>>>single data";
    let {email,name} =  docSnap.data()
    userEmail  =  email
    // renderUi(email)
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  // getsingleUser(uid)
  renderUi(Category, Description, Status, Title, Type, uid , dateExample,userEmail);

});


function renderUi(Category, Description, Status, Title, Type, uid, dateExample, email) {
  let main_div = document.getElementById("main_div");
  let div = document.createElement("div");

  // Check if dateExample exists and has a valid Timestamp
  let localDateTimeString = "Unknown Date";
  // if (dateExample && dateExample.createdAt && typeof dateExample.createdAt.toDate === 'function') {
  //   const timestamp = dateExample.createdAt;
  //   const dateObject = timestamp.toDate();
  //   localDateTimeString = dateObject.toLocaleString();
  // }

  let ui = `
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${email}</h5>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${Title}</h5>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${Description}</h5>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${Category}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">${Status}</p>
  </a>
  `;

  div.innerHTML = ui;
  main_div.appendChild(div);
}
