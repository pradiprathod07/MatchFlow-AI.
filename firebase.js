// =========================================
// MATCHFLOW AI X
// Firebase Configuration
// =========================================

// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// =========================================
// YOUR FIREBASE CONFIG
// Replace these values with your Firebase project
// =========================================

const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT",

    storageBucket: "YOUR_PROJECT.appspot.com",

    messagingSenderId: "123456789",

    appId: "YOUR_APP_ID"

};

// =========================================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


// =========================================
// LOGIN
// =========================================

export async function login(email,password){

    try{

        const user = await signInWithEmailAndPassword(

            auth,

            email,

            password

        );

        console.log("Logged In",user.user.email);

        return true;

    }

    catch(error){

        alert(error.message);

        return false;

    }

}


// =========================================
// LOGOUT
// =========================================

export async function logout(){

    await signOut(auth);

}


// =========================================
// USER SESSION
// =========================================

onAuthStateChanged(auth,(user)=>{

    if(user){

        console.log("Current User :",user.email);

    }

    else{

        console.log("User Logged Out");

    }

});


// =========================================
// SAVE DASHBOARD DATA
// =========================================

export async function saveDashboard(data){

    await setDoc(

        doc(db,"stadium","live"),

        data

    );

}


// =========================================
// UPDATE DATA
// =========================================

export async function updateDashboard(data){

    await updateDoc(

        doc(db,"stadium","live"),

        data

    );

}


// =========================================
// GET LIVE DATA
// =========================================

export function listenDashboard(){

    onSnapshot(

        doc(db,"stadium","live"),

        (snapshot)=>{

            if(snapshot.exists()){

                const data = snapshot.data();

                updateUI(data);

            }

        }

    );

}


// =========================================
// UPDATE HTML
// =========================================

function updateUI(data){

    document.getElementById("crowdCount").innerHTML =
        data.crowd;

    document.querySelector(".danger").innerHTML =
        data.risk;

}


// =========================================
// SAMPLE DATA
// =========================================

saveDashboard({

    crowd:52000,

    risk:"HIGH",

    weather:28,

    transport:"Normal",

    waitTime:4,

    updated:new Date().toLocaleString()

});

console.log("Firebase Connected");