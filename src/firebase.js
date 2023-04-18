// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2HyX1wDWknbcW8SgQ5Nt2iV6sIbUOt0I",
  authDomain: "my-portofino.firebaseapp.com",
  projectId: "my-portofino",
  storageBucket: "my-portofino.appspot.com",
  messagingSenderId: "170246799897",
  appId: "1:170246799897:web:57dc82916b0f382dfde088"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

