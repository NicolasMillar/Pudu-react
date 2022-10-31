import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

// We should not upload this to git, but for now it's ok
const firebaseConfig = {
  apiKey: "AIzaSyBwtZplrtO7c5I3deUkz4dGXjL5A9TJh_0",
  authDomain: "foodimpact-7a717.firebaseapp.com",
  projectId: "foodimpact-7a717",
  storageBucket: "foodimpact-7a717.appspot.com",
  messagingSenderId: "938826633636",
  appId: "1:938826633636:web:2e128beac822759423b131"
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();

export const firestore = firebase.firestore();

export const realtime = firebase.database();

export default firebase;