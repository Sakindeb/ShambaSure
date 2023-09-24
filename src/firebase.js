import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6SR-hK-iiB_LWpmsdGecUBpE22Pn0z5c",
  authDomain: "shamba-sure.firebaseapp.com",
  projectId: "shamba-sure",
  storageBucket: "shamba-sure.appspot.com",
  messagingSenderId: "1023207839810",
  appId: "1:1023207839810:web:a876f54dd6ac19858e75db",
  measurementId: "G-LB39WQSYLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };