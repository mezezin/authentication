import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBysGzjNDovHp560NcGxdf0lOLOCphN5M4",
    authDomain: "authentication-9930e.firebaseapp.com",
    projectId: "authentication-9930e",
    storageBucket: "authentication-9930e.appspot.com",
    messagingSenderId: "68687196607",
    appId: "1:68687196607:web:39b256e229136df287f10a"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export default firebase
