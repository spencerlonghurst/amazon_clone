// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyB59icSa_EctIBRnrAkF6L0AFFScVH0h3M",
  authDomain: "clone-6c11d.firebaseapp.com",
  projectId: "clone-6c11d",
  storageBucket: "clone-6c11d.appspot.com",
  messagingSenderId: "112514324152",
  appId: "1:112514324152:web:2232a3ad1ad039727e864d",
  measurementId: "G-BM4YBPB5JH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }