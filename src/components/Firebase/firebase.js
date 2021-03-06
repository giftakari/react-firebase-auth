import app from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.API_AUTH,
  databaseURL: process.env.API_DATABASE_UL,
  projectId: process.env.API_PROJECT_ID,
  storageBucket: process.env.API_STORAGE_BUCKET,
  messagingSenderId: process.env.API_MESSAGE_SENDER_ID,
  appId: "1:915762650668:web:edd2864383198de9bc3b89",
  measurementId: "G-E16XESZWW4"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth;
  }
  DoCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  DoSignInWithEmailAndPassWord = (email, password) =>
    this.auth.signInWithEmailAndPassWord(email, password);

  doSignOut = () => this.auth.signOut;

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
