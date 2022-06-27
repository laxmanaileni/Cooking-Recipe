import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebase=()=>{
    const firebaseConfig = {
        apiKey: "AIzaSyDnADgMJFchWyK4QwEBV6yxLu-F-xoB6zU",
        authDomain: "cookingrecipe-89cc3.firebaseapp.com",
        databaseURL: "https://cookingrecipe-89cc3-default-rtdb.firebaseio.com",
        projectId: "cookingrecipe-89cc3",
        storageBucket: "cookingrecipe-89cc3.appspot.com",
        messagingSenderId: "814306172918",
        appId: "1:814306172918:web:d339f798081ab9038231d7"
      };
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}


export default firebase;