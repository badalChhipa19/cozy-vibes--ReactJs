import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR3WLIiVrCRE4Quo2dG4UICkviGfXHe-o",
  authDomain: "cozy-vibes.firebaseapp.com",
  projectId: "cozy-vibes",
  storageBucket: "cozy-vibes.appspot.com",
  messagingSenderId: "122749740192",
  appId: "1:122749740192:web:0606cc6854fec5270e55c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const gogleProvider = new GoogleAuthProvider();

gogleProvider.setCustomParameters({
  prompt: "select_account",
});

//TODO: Authentication Process
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, gogleProvider);

//TODO: geting and seting document in firestore
const db = getFirestore();

export const addCollectionAndDocuments = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
};
