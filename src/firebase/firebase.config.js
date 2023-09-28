// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeggZ2Hf3jHflnvCbgncgEDOhWXA0i81M",
  authDomain: "module-50-user-authentication.firebaseapp.com",
  projectId: "module-50-user-authentication",
  storageBucket: "module-50-user-authentication.appspot.com",
  messagingSenderId: "613961435202",
  appId: "1:613961435202:web:9942ae70c6e0bed7fb45db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;