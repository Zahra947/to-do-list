//import firebase from "./firebase";
import { initializeApp, getFirestore } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyDEMn9-CmPMuWxQ1WPOfezyDruGoOVd6Xg",
  authDomain: "to-do-app-4bc3f.firebaseapp.com",
  projectId: "to-do-app-4bc3f",
  storageBucket: "to-do-app-4bc3f.appspot.com",
  messagingSenderId: "1092825749742",
  appId: "1:1092825749742:web:3b198c3417ce62482dbbff",
  measurementId: "G-CKQ1EN5YK7"
});

const db = getFirestore(app);

export default db;
