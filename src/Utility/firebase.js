// firebase modular SDK (v9+)
// TODO: Add SDKs for Firebase products that you want to use
// we import those bcuz we need those services.but the imports that we need might differ from time to time.so check the current set up for imports

// initializeApp starts the Firebase app with our config.
import { initializeApp } from "firebase/app";
// getAuth gets the authentication service, so we can use sign in / sign up.
import { getAuth } from "firebase/auth";
// getFirestore This gives us access to Firebase's NoSQL database (Firestore).
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// this is specific and unique for the project
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // Path to your Firebase Storage bucket(The Firebase project's file storage container)
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // Used for push notifications / Firebase Cloud Messaging
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // App identifier used for Firebase
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// This starts your Firebase app using the config you gave. You must do this before using Firebase features (like auth or database).
const app = initializeApp(firebaseConfig);
// auth: we can now import this anywhere to handle login, sign-up, logout, etc.
export const auth = getAuth(app);
// db: You can import this to read/write from Firestore.
export const db = getFirestore(app);


