import firebase from "firebase/app";
import "firebase/auth";
 
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDkCW5YP-ZCAoyu3VMvz5ITzKx696yOUz8",
    authDomain: "hosagram-54036.firebaseapp.com",
    projectId: "hosagram-54036",
    storageBucket: "hosagram-54036.appspot.com",
    messagingSenderId: "1012318321946",
    appId: "1:1012318321946:web:80f615c5f012c2347040a3"
  }).auth();
