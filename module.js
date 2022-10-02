// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
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


const db = getFirestore();
const colRef = collection(db, "School A");

let everyone = []
let students = []
let faculty = []
getDocs(colRef)
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            if (doc.data().Role == "student"){
                students.push({...doc.data(), id: doc.id})
                everyone.push({...doc.data(), id: doc.id})
            }else{
                faculty.push({...doc.data(), id: doc.id})
                everyone.push({...doc.data(), id: doc.id})

            }
           
        })
    })



console.log(everyone);




const login = document.querySelector(".login-info");




login.addEventListener("submit", e =>{
  e.preventDefault();
  var username = e.target.username.value;
  var password = e.target.password.value;
  let match = everyone.filter(e => e.username === username)

  if (match.length>0){
    if (match[0].password === password){
        if(match[0].Role === "student"){
            window.location.href = "/student_center.html";
        }else{
            window.location.href = "/faculty_center.html";
        }
    }
  }
  e.target.reset();
  
  
 
})