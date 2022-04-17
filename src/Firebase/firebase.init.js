// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVEvSnWC5c_shgHYlFCGbR8aniGTLJid0",
  authDomain: "assignment-10-8d187.firebaseapp.com",
  projectId: "assignment-10-8d187",
  storageBucket: "assignment-10-8d187.appspot.com",
  messagingSenderId: "988818743546",
  appId: "1:988818743546:web:e3c17b8defb24e269f6943",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
