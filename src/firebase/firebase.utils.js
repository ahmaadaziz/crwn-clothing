import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCK2kiPaPo5uhHZ2iz8muP2GfIFbmLOKZg",
  authDomain: "crwn-clothing-db-az79.firebaseapp.com",
  projectId: "crwn-clothing-db-az79",
  storageBucket: "crwn-clothing-db-az79.appspot.com",
  messagingSenderId: "172727906090",
  appId: "1:172727906090:web:d0e887a4c02236c7683853",
  measurementId: "G-SV6K1F6RBF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
