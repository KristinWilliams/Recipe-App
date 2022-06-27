import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_DOMAIN,

  projectId: process.env.REACT_APP_ID,

  storageBucket: process.env.REACT_APP_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,

  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
