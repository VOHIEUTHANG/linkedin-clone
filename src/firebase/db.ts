import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAApcVQzX5Y-415q0ctY_1vUHz23uxWyzg",
  authDomain: "linked-clone-6e9d3.firebaseapp.com",
  projectId: "linked-clone-6e9d3",
  storageBucket: "linked-clone-6e9d3.appspot.com",
  messagingSenderId: "546896194834",
  appId: "1:546896194834:web:e65ff5e58f1fc7df7357cb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

export const getPosts = async () => {
  const postsCol = collection(db, "posts");
  const citySnapshot = await getDocs(postsCol);
  const postList = citySnapshot.docs.map((doc) => doc.data());
  return postList;
};
