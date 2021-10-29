// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import * as firebaser from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJM2zspfrF2eGmHNGp2Kt3wiE73Dd60r8",
    authDomain: "commerce-native.firebaseapp.com",
    projectId: "commerce-native",
    storageBucket: "commerce-native.appspot.com",
    messagingSenderId: "224786327931",
    appId: "1:224786327931:web:ea879052f8e31ba93ff5de"
  };

// Initialize Firebase
const app = firebase.default.initializeApp(firebaseConfig);

const auth = firebase.default.auth()

export { auth };