import firebase from "firebase";

export const  saveSnapshot =(image:string)=>  firebase.database()
    .ref(`users/${firebase.auth().currentUser?.uid}/images/`)
    .push(image);
