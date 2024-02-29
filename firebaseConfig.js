
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

  import { getFirestore  ,collection, addDoc ,doc, getDoc ,setDoc} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBeh9PkZsKU0Fh6_i407QFJsjlyX3w-uEc",
    authDomain: "addi-blog.firebaseapp.com",
    databaseURL: "https://addi-blog-default-rtdb.firebaseio.com",
    projectId: "addi-blog",
    storageBucket: "addi-blog.appspot.com",
    messagingSenderId: "647100897829",
    appId: "1:647100897829:web:6607ee07ccee540de83dcc",
    measurementId: "G-TV3VF85YX1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {
    auth
    ,createUserWithEmailAndPassword,signInWithEmailAndPassword,
    collection, addDoc,db
    ,doc, getDoc,setDoc,onAuthStateChanged,
  }

//    <!-- <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
{/* <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js"></script> --> */}