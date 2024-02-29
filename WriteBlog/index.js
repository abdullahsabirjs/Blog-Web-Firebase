import { auth, db, collection, onAuthStateChanged, addDoc, setDoc, doc } from "../firebaseConfig.js";

let uID;
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("writeAskForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the values from the form
      const title = document.getElementById("title").value;
      const category = document.getElementById("category").value;
      const description = document.getElementById("description").value;
      const imageUpload = document.getElementById("imageUpload").files[0]; // Get the image file
      // Type and Status with default values if not selected
      let type = document.querySelector('input[name="type"]:checked')?.value || 'Default Type';
      let status = document.querySelector('input[name="status"]:checked')?.value || 'Default Status';

      writeBlog({
        Title: title,
        Category: category,
        Type: type,
        Status: status,
        Description: description,
        uid: uID, // Add the user's UID to the blog data
        // Image: imageUpload,
      });
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    uID = uid;
  } else {
    console.log("User is signed out");
  }
});

async function writeBlog(blogdata) {
  try {
    // Add a new document with a generated ID to the "allBlogData" collection
    // const docRef = await addDoc(collection(db, "allBlogData"), {
    //   ...blogdata,
    // });
    await setDoc(doc(db, "allBlogData", uID), {
        ...blogdata,
      });
    console.log("Document written with ID: ");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
