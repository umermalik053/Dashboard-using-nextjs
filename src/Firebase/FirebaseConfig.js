
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT38sXfiZ89zyUEb-Nej6v6SG3q_IITns",
  authDomain: "facebook-post-1.firebaseapp.com",
  projectId: "facebook-post-1",
  storageBucket: "facebook-post-1.firebasestorage.app",
  messagingSenderId: "385210105837",
  appId: "1:385210105837:web:b180e8dde2ae42f96c31e4",
  measurementId: "G-42T7V0BFDK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut}
