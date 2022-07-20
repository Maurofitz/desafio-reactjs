import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJNfljS8CI6lPDSsL3CM6JWcVx7qrNVR4",
  authDomain: "original-reactjs.firebaseapp.com",
  projectId: "original-reactjs",
  storageBucket: "original-reactjs.appspot.com",
  messagingSenderId: "353369676017",
  appId: "1:353369676017:web:56cfc0fcc0cbba2710f150"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);