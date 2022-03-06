import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, query, where, doc, setDoc, updateDoc, } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDs_u170PamRlY4t1qQzrB31iwuVmtF2SU",
    authDomain: "pesquisa-de-satisfacao-975b0.firebaseapp.com",
    projectId: "pesquisa-de-satisfacao-975b0",
    storageBucket: "pesquisa-de-satisfacao-975b0.appspot.com",
    messagingSenderId: "451911741984",
    appId: "1:451911741984:web:775144c44f290aa722c245",
    measurementId: "G-R5K6YRSZK7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db,collection, getDocs, query, where, doc, setDoc, updateDoc }
