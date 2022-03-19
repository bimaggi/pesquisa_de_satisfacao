import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, query, where, doc, setDoc, updateDoc, } from 'firebase/firestore'


const firebaseConfig= {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

const app= initializeApp( firebaseConfig )
const db= getFirestore( app )

export { db,collection, getDocs, query, where, doc, setDoc, updateDoc }
