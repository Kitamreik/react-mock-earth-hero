// DO NOT TOUCH

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

// import firebase from 'firebase/compat/app'; 
// import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: 'process.env.REACT_APP_FIREBASE_API_KEY',
    authDomain: 'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN',
    databaseURL: 'process.env.REACT_APP_FIREBASE_DATABASE_URL',
    projectId: 'process.env.REACT_APP_PROJECT_ID',
    storageBucket: 'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET',
    messagingSenderId: 'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
    appId: 'process.env.REACT_APP_FIREBASE_APP_ID',
    // EH
    // measurementId: 'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID',
};

export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error('No Firebase configuration object provided.' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return firebaseConfig;
    }
}

//Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

// export function auth() {
//     return app.auth();
//   }
// export default auth;

//export const db = getFirestore(app)
//db.collection('todos').getDocs();
//const todosCol = collection(db, 'todos')
//const snapShot = await getDocs(todosCol)

//Detect auth state
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('Logged In');
    } else {
        console.log('No User');
    }
});
