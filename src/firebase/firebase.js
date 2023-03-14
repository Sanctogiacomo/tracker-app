import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDf0Ei0KTYz2U_qC6cUL7QWedBvMJg2sAg",
  authDomain: "tracker-app-b894e.firebaseapp.com",
  projectId: "tracker-app-b894e",
  storageBucket: "tracker-app-b894e.appspot.com",
  messagingSenderId: "301963425010",
  appId: "1:301963425010:web:9d18400f0bd3508e8ecc6b",
  measurementId: "G-677NYYZJMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//init firestore service
const db = getFireStore(app);
import { collection, addDoc } from "firebase/firestore"; 
// import db  from "@/firebase/firebase";
try {
  const docRef = await addDoc(collection(db, {
    "tasks": [
      {
        "id": "1",
        "text": "Doctors Appointment",
        "day": "March 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": "2",
        "text": "Meeting with boss",
        "day": "March 6th at 1:30pm",
        "reminder": true
      }
    ]
  }));
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
export default db;