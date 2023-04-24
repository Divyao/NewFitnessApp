// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyBuGwavDmJhb17ZywH_byZQ1ZT9ffmDaM4",
        authDomain: "fitnessproject-80829.firebaseapp.com",
        projectId: "fitnessproject-80829",
        storageBucket: "fitnessproject-80829.appspot.com",
        messagingSenderId: "606042868759",
        appId: "1:606042868759:web:dec5dee7c0b0f3073a6052",
        measurementId: "G-YPRGL5GDLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth=getAuth(app);


export default app;