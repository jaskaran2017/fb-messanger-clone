import firebase from "firebase/app";

import "firebase/firestore";

const firebase_config = {
  apiKey: "AIzaSyDjqo6rl3tWDxBomrdv-nxhPO0JQ1HhgZo",
  authDomain: "fb-messanger-clone-9e62d.firebaseapp.com",
  databaseURL: "https://fb-messanger-clone-9e62d-default-rtdb.firebaseio.com",
  projectId: "fb-messanger-clone-9e62d",
  storageBucket: "fb-messanger-clone-9e62d.appspot.com",
  messagingSenderId: "1057029181897",
  appId: "1:1057029181897:web:e5f9f5f5b2c06067a51818",
};
firebase.initializeApp(firebase_config);
const db = firebase.firestore();

export default db;
