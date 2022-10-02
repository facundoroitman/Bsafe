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


//For login
if (window.location.pathname == "index.html"){
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


} else if (window.location.pathname == "mental.html"){
    const mentalForm = document.querySelector(".mentalline");

    login.addEventListener("submit", e =>{
    e.preventDefault();
    var text = e.target.crisisline.value;
    window.location.href = "/student_center.html";//only student goes to this
    e.target.reset();
    })
    
    
}else if (window.location.pathname == "report.html"){
    const reportForm = document.querySelector(".reportform");

    login.addEventListener("submit", e =>{
    e.preventDefault();
    var reportname = e.target.reportname.value;
    var text = e.target.reportline.value;

    let match = everyone.filter(e => e.username === username) // WILL NEED USERNAME
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


}else if (window.location.pathname == "referrals.html"){
    const referForm = document.querySelector(".referform");

    login.addEventListener("submit", e =>{
    e.preventDefault();
    var refername = e.target.refername.value;
    var text = e.target.referralline.value;

    let match = everyone.filter(e => e.username === username) // WILL NEED USERNAME
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
}