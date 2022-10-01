// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5oUqemsgz1sNopnVsWgFirj45Iazcsb0",
  authDomain: "hackmit2022-1330f.firebaseapp.com",
  projectId: "hackmit2022-1330f",
  storageBucket: "hackmit2022-1330f.appspot.com",
  messagingSenderId: "559783776941",
  appId: "1:559783776941:web:0f1771f006e546623fac24",
  measurementId: "G-R1WMKCYS3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);

const login = document.querySelector(".login-info");




login.addEventListener("submit", e =>{
  e.preventDefault();
  var username = e.target.username.value;
  var password = e.target.password.value;
  console.log(username +" " + password);
  e.target.reset();
  
  
  //   THE FOLLOWING LINE OF CODE ASSUMES THAT THE PERSON WAS IN THE DATABASE
  window.location.href = "/student_center.html";
  
  
})