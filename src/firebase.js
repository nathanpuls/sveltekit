import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
``

const firebaseConfig = {
  apiKey: "AIzaSyCauN-vsgUfQJXc5b41NoCnYzi6FIn86MQ",
  authDomain: "linkshare-eb70b.firebaseapp.com",
  databaseURL: "https://linkshare-eb70b-default-rtdb.firebaseio.com",
  projectId: "linkshare-eb70b",
  storageBucket: "linkshare-eb70b.appspot.com",
  messagingSenderId: "284502085616",
  appId: "1:284502085616:web:b6ef9a2b4b55c8b6f85735",
  measurementId: "G-ZJ2REQELMN"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };

