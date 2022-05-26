// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYEikq9Ld8bL5vHxiyW9dTvjsIhMkAnfc",
  authDomain: "chapter-9-febrianians.firebaseapp.com",
  databaseURL: "https://chapter-9-febrianians-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chapter-9-febrianians",
  storageBucket: "chapter-9-febrianians.appspot.com",
  messagingSenderId: "544032624070",
  appId: "1:544032624070:web:148c796c2476c1e0cdf6c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)
const storage = getStorage(app)

export {
    auth,
    db,
    storage
}