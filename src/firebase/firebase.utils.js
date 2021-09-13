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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log("yes");
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then((whatever) => console.log(whatever))
    .catch((error) => console.log(error));

export default firebase;
