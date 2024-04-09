import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAWkMVduGOwbtUI1Xx7HDXOmhub20jbqXw",
  authDomain: "react-netflix-clone-c2dd6.firebaseapp.com",
  projectId: "react-netflix-clone-c2dd6",
  storageBucket: "react-netflix-clone-c2dd6.appspot.com",
  messagingSenderId: "609658079301",
  appId: "1:609658079301:web:2337a26329701337113b2c",
  measurementId: "G-BBCJSY8LS7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);