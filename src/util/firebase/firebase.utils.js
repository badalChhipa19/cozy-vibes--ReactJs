import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

//! FireBase config to use firebase in your project !MUST
const firebaseConfig = {
  apiKey: "AIzaSyDR3WLIiVrCRE4Quo2dG4UICkviGfXHe-o",
  authDomain: "cozy-vibes.firebaseapp.com",
  projectId: "cozy-vibes",
  storageBucket: "cozy-vibes.appspot.com",
  messagingSenderId: "122749740192",
  appId: "1:122749740192:web:0606cc6854fec5270e55c5",
};

//! Initialize Firebase
initializeApp(firebaseConfig);

//TODO: Create google Provider to verify users
const gogleProvider = new GoogleAuthProvider();
// some basic setup in order to use google popup
gogleProvider.setCustomParameters({
  prompt: "select_account",
});

//TODO: Authentication Process
export const auth = getAuth();

//TODO: SignIn with Google And Email and Password functions
export const signInWithGooglePopup = () => signInWithPopup(auth, gogleProvider);
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; //If email or password are not true i.e. empty. then stop to exicute further
  return await signInWithEmailAndPassword(auth, email, password);
};

//TODO: SignUp or Create new user with Email And Password function
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return; //If email or password are not true i.e. empty. then stop to exicute further
  return createUserWithEmailAndPassword(auth, email, password);
};

// TODO: SignOut user
export const signOutUser = async () => await signOut(auth);

//TODO: Keep trake of Auth change to use signin or signout user
export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);

//TODO: geting and seting document for users in firestore
const db = getFirestore();

export const createUserCollectionAndDocuments = async (
  userAuth,
  additionalInformation = {}
) => {
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

//TODO: setting document for data in firestore
export const addDataAndCollection = async (
  collectionKey,
  objextToAdd,
  name
) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objextToAdd.forEach((item) => {
    const docRef = doc(collectionRef, item[name]);
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log("Done..🤞🤞");
};

//TODO: Getting documents from db
export const getCollectionAndDocuments = async function (collectionKey) {
  const collectionRef = collection(db, collectionKey);

  const q = query(collectionRef);

  const querySnapSort = await getDocs(q);

  const documentArray = querySnapSort.docs.map((item) => item.data());
  return documentArray;
};
