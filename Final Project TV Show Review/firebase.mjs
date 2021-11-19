import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js"
import { getFirestore, addDoc, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js'



const firebaseConfig = 
{
    apiKey: "AIzaSyDvfEHoOBAotzy2Pdq_CXbseUAdcOIVjQQ",
    authDomain: "mecha-media.firebaseapp.com",
    projectId: "mecha-media",
    storageBucket: "mecha-media.appspot.com",
    messagingSenderId: "897412803060",
    appId: "1:897412803060:web:864fe45646da794ceb71a1",
    measurementId: "G-XQ60JFL3BZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


window.isLoggedIn = function(){
    return auth.currentUser !== null;
}

window.login = function(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}

window.signup = function(email,password){
    return createUserWithEmailAndPassword(auth, email, password);
}

window.logout = function(){
    auth.signOut();
}

window.onLogin = function( f ){
    onAuthStateChanged(auth, user => {
        f( user );
    });
}


//////////////////////////////////////////////
// exposed functionality for db
window.addComment = function(comment){
    return addDoc( collection(db, "comments"), {comment} );
}

window.forEachComment = async function( f ){
    var docs = await getDocs( collection(db, "comments") );
    console.log(docs);
    docs.forEach( doc => f(doc.data()) );
}




