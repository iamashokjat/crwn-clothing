import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config={
    apiKey: "AIzaSyAA7Uj0qA6GQwnKWk5VxuE4cwpGaySCeGI",
    authDomain: "crwn-db-bb2c3.firebaseapp.com",
    databaseURL: "https://crwn-db-bb2c3.firebaseio.com",
    projectId: "crwn-db-bb2c3",
    storageBucket: "crwn-db-bb2c3.appspot.com",
    messagingSenderId: "44783478115",
    appId: "1:44783478115:web:af2e5e3e5f90362c4b5f56",
    measurementId: "G-K56QBZCS9B"
  } 

  firebase.initializeApp(config); 

  export const auth=firebase.auth(); 
  export const firestore=firebase.firestore(); 

  const provider=new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({prompt:'select_account'});  

  export const signInWithGoogle=() => auth.signInWithPopup(provider); 

  export default firebase;