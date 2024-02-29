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



import { db, doc, getDoc } from "../firebaseConfig.js";

async function getData() {
    let  uid = localStorage.getItem("user")
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    let {email,name} = docSnap.data()
    writeDataUi(email,name)
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
}

getData();


function   writeDataUi(email,name){
    console.log(email);
    console.log(name);
    document.getElementById("userEmail").textContent = `User email: ${email}`;
    document.getElementById("userName").textContent = name
}
