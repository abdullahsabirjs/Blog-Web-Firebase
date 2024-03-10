import { db, doc, getDoc, collection, onAuthStateChanged, auth, addDoc, Timestamp } from "./firebaseConfig.js";

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
      // const imageUpload = document.getElementById("imageUpload").files[0]; // Get the image file
      // // Type and Status with default values if not selected
      let type = document.querySelector('input[name="type"]:checked')?.value || 'Default Type';
      let status = document.querySelector('input[name="status"]:checked')?.value || 'Default Status';

      writeBlog({
        Title: title,
        Category: category,
        Type: type,
        Status: status,
        Description: description,
        uid: uID,
        dateExample: Timestamp.fromDate(new Date()),
        // Add the user's UID to the blog data
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
    const docRef = await addDoc(collection(db, "allBlogData"), {
      ...blogdata,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}


async function getData() {
  let uid = localStorage.getItem("user");
  const userDocRef = doc(db, "users", uid);
  const userDocSnap = await getDoc(userDocRef);
  let { email, name } = userDocSnap.data();
  writeUserDataUi(email, name);

  // const blogsQuery = query(collection(db, "allBlogData"), where("uid", "==", uid));
  // const blogsSnapshot = await getDoc(blogsQuery);
  // blogsSnapshot.forEach((doc) => {
  //     const blogData = doc.data();
  //     displayBlog(blogData);
  // });
}
