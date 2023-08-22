// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXRZ3O2K75JD3xK0pO2P7_xCirJ-3_m18",
    authDomain: "montero-reactjs-apple.firebaseapp.com",
    projectId: "montero-reactjs-apple",
    storageBucket: "montero-reactjs-apple.appspot.com",
    messagingSenderId: "784428337442",
    appId: "1:784428337442:web:388758df0efe4d5244fd7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);