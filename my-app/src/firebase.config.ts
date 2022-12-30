

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzg0ZzrB5ljsXGGLniUu2VsguX8RMmqug",
  authDomain: "disneypluse-clone-9f241.firebaseapp.com",
  projectId: "disneypluse-clone-9f241",
  storageBucket: "disneypluse-clone-9f241.appspot.com",
  messagingSenderId: "933259675400",
  appId: "1:933259675400:web:5393edfa74113c749bcebd",
  measurementId: "G-WZ0E2CVN9E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore();



