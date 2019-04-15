import firebase from 'firebase'
import 'firebase/database'

let config = {
    apiKey: "AIzaSyCIDwUjsw4WnIpGNn4DrIBHdS4rZKWOq9Q",
    authDomain: "adishare-personal.firebaseapp.com",
    databaseURL: "https://adishare-personal.firebaseio.com",
    projectId: "adishare-personal",
    storageBucket: "adishare-personal.appspot.com",
    messagingSenderId: "763116825352"
};

firebase.initializeApp(config);

export default firebase
