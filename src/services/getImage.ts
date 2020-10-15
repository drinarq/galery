import firebase from "firebase";

export const  getImage =()=>  firebase.database()
    .ref(`users/gallery`)
    .once("value")
    .then(
        function (snapshot)
        {
            return Object.values(snapshot.val());
        });