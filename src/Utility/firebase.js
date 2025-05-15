// firebase modular SDK (v9+)
// TODO: Add SDKs for Firebase products that you want to use
// we import those bcuz we need those services.but the imports that we need might differ from time to time.so check the current set up for imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// this is specific and unique for the project
const firebaseConfig = {
  apiKey: "AIzaSyAKeL0LxXrw0crS12AYuvRvKbZe1yzGQSg",
  authDomain: "clone-e752e.firebaseapp.com",
  projectId: "clone-e752e",
  storageBucket: "clone-e752e.firebasestorage.app",
  messagingSenderId: "138638998721",
  appId: "1:138638998721:web:1c3c35163f4a300964a840",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


