import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB35z4xw65bITab80XjZ-kBKm_qY6A5dd0",
    authDomain: "instagram-clone-d1f3a.firebaseapp.com",
    projectId: "instagram-clone-d1f3a",
    storageBucket: "instagram-clone-d1f3a.appspot.com",
    messagingSenderId: "658441722449",
    appId: "1:658441722449:web:11e7608ab48448f7a8b670"
};


const firebase = Firebase.apps.length ? Firebase.apps[0] : Firebase.initializeApp(config, "instagram-clone");
const { FieldValue } = firebase.firestore;

export default { firebase, FieldValue };