import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDef6Dc_Kw8b2y2WZvA6HF_Ot7L5dGG16w",
  authDomain: "tinder-clone-v1.firebaseapp.com",
  databaseURL: "https://tinder-clone-v1.firebaseio.com",
  projectId: "tinder-clone-v1",
  storageBucket: "tinder-clone-v1.appspot.com",
  messagingSenderId: "234679818713",
  appId: "1:234679818713:web:8bf1ae0d77ff9b47ede1c8",
};

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database (Cloud Firestore))
const db = firebaseApp.firestore();

// initialize the authentication ()
const auth = firebaseApp.auth();

export { db, auth };
