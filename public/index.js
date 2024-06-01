
// import { initializeApp } from "firebase/app";

// import { getDatabase } from "firebase/database";

// const firebaseConfig = {

//   databaseURL: "https://wheely-5af2e-default-rtdb.firebaseio.com/",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// print(database['cars'][1])
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseApp = initializeApp( {
    apiKey: "AIzaSyDE4-_Cjjr3M1NwH8ylBeoYG0elilisBho",
    authDomain: "wheely-5af2e.firebaseapp.com",
    databaseURL: "https://wheely-5af2e-default-rtdb.firebaseio.com",
    projectId: "wheely-5af2e",
    storageBucket: "wheely-5af2e.appspot.com",
    messagingSenderId: "252861264620",
    appId: "1:252861264620:web:95c600869df0ff97ba2bc9",
    measurementId: "G-SRHJ0JLJ9V"
  });

  const database = getDatabase(firebaseApp);

