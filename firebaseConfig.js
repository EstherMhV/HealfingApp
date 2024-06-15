import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { app, auth, db };