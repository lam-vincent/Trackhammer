import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJKcmZ5fygPbaVqqWMfslhMnl6kZqkAn4",
  authDomain: "trackhammer-935cc.firebaseapp.com",
  databaseURL: "https://trackhammer-935cc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trackhammer-935cc",
  storageBucket: "trackhammer-935cc.appspot.com",
  messagingSenderId: "945019616656",
  appId: "1:945019616656:web:ff4d507c21eaa0ff610715"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('logged in!');
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    console.log('no user');
    // User is signed out
    // ...
  }
});

signInWithPopup(auth, new GoogleAuthProvider())
