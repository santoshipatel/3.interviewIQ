
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-21cac.firebaseapp.com",
  projectId: "fir-21cac",
  storageBucket: "fir-21cac.firebasestorage.app",
  messagingSenderId: "897614576637",
  appId: "1:897614576637:web:5a77d94e7b8f6e3ce37794"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}