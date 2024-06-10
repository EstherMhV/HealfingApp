import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: ' AIzaSyD0qlsmlnvuKux85Xy7ZCqU0w2qI7a_GLY',
  authDomain: '1:430066522321:android:cb54209a6ce462722b0df0.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: '1:430066522321:android:cb54209a6ce462722b0df0',
  storageBucket: '1:430066522321:android:cb54209a6ce462722b0df0.appspot.com',
  messagingSenderId: '430066522321',
  appId: 'healfing-53eb3',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
