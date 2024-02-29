// db.collection("users").doc("YOUR_USER_ID").get().then((doc) => {
//     if (doc.exists) {
//         const userData = doc.data();
//         document.getElementById("userName").textContent = userData.name;
//         document.getElementById("userId").textContent = `User ID: ${doc.id}`;
//         document.getElementById("userImage").src = userData.image;
//     } else {
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });



// import { db, doc, getDoc } from "../firebaseConfig.js";

// async function getData() {
//     const docRef = doc(db, "users", "tcGf34NPYNL4zAuwCHbv");
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         console.log("No such document!");
//     }
// }

// getData();
