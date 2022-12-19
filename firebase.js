// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBg-IJHQY0Pkb-7Kn1-jiljtxSbrbjuJOA",
    authDomain: "tackl-370310.firebaseapp.com",
    projectId: "tackl-370310",
    storageBucket: "tackl-370310.appspot.com",
    messagingSenderId: "742463329823",
    appId: "1:742463329823:web:dbcea6941f6f89b40fa72a"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();