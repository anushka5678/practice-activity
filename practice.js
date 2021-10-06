
const firebaseConfig = {
    apiKey: "AIzaSyB20fqeAoQh4lGFw_XRRphiKmiT8D8b_JA",
    authDomain: "practice-activity-6b849.firebaseapp.com",
    databaseURL: "https://practice-activity-6b849-default-rtdb.firebaseio.com",
    projectId: "practice-activity-6b849",
    storageBucket: "practice-activity-6b849.appspot.com",
    messagingSenderId: "87877286958",
    appId: "1:87877286958:web:6ba7ca0348279fdf53f3bf",
    measurementId: "G-3SMV2PGGSY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser(){
    user_name= document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}