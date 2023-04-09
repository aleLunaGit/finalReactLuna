import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTQivQqA2_bAy2F0ReRwwWOVXT-Ay0iaw",
  authDomain: "reactluna-ff02b.firebaseapp.com",
  projectId: "reactluna-ff02b",
  storageBucket: "reactluna-ff02b.appspot.com",
  messagingSenderId: "360714965602",
  appId: "1:360714965602:web:1dacea8e6850cb621bb73b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
