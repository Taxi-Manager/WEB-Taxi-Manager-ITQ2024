import { initializeApp } from "firebase/app"; //npm install firebase@10.11.0
import { getAuth } from "firebase/auth"; // npm install firebase@10.11.0

const firebaseConfig = {
  apiKey: "AIzaSyB1VPhVTlowfkA9-3BXZXfXH9t_5WzaBBo",
  authDomain: "topicos-7474e.firebaseapp.com",
  databaseURL: "https://topicos-7474e-default-rtdb.firebaseio.com",
  projectId: "topicos-7474e",
  storageBucket: "topicos-7474e.appspot.com",
  messagingSenderId: "33809695042",
  appId: "1:33809695042:web:0689cc8f53c10c7efa88db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
