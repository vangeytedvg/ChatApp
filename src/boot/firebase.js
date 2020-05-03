// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCI0jT9Ql0QHln71nBXeLyODp9jO1Mrfdw",
  authDomain: "smackchat-6e866.firebaseapp.com",
  databaseURL: "https://smackchat-6e866.firebaseio.com",
  projectId: "smackchat-6e866",
  storageBucket: "smackchat-6e866.appspot.com",
  messagingSenderId: "338207423291",
  appId: "1:338207423291:web:c2ea1244a2d0448447951e",
  measurementId: "G-QLF8F39EJH"
};
// Initialize Firebase.
let firebaseApp = firebase.initializeApp(firebaseConfig);
// Get the firebase authorization 
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

// Make sure these variables are visible in the application
export { firebaseAuth, firebaseDb }