
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "mtl-hacker-portfolio",
  "appId": "1:381637051972:web:e37299f287481e171e1e11",
  "storageBucket": "mtl-hacker-portfolio.firebasestorage.app",
  "apiKey": "AIzaSyALo7GuZSAZvAgytqnmzul0pWq8bioGg7U",
  "authDomain": "mtl-hacker-portfolio.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "381637051972"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
