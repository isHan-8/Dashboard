const firebase=require("firebase")
const firebaseConfig = {
    apiKey: "AIzaSyBw6nq4PTdLt84xGYa0fp0UfjXWYA-ZJiI",
    authDomain: "helfers-firebase.firebaseapp.com",
    databaseURL: "https://helfers-firebase-default-rtdb.firebaseio.com",
    projectId: "helfers-firebase",
    storageBucket: "helfers-firebase.appspot.com",
    messagingSenderId: "132782723169",
    appId: "1:132782723169:web:42bc8e3249e95f254ada20",
    measurementId: "G-F6FPGZ3MW4"
  };
  firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore()
  const User=db.collection("Users")
  module.exports = User;