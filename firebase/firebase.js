
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnici8OOGLmSgNgU-cFSa0H4qCOGHGYGA",
  authDomain: "mediplus-c02b8.firebaseapp.com",
  projectId: "mediplus-c02b8",
  storageBucket: "mediplus-c02b8.appspot.com",
  messagingSenderId: "623168477334",
  appId: "1:623168477334:web:0f7c6128fbe9c91ab28ab7",
  measurementId: "G-6GFCX579VQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };