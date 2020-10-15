import firebase from 'firebase';

export const userData = () =>
    firebase
        .database()
        .ref(`users/${firebase.auth().currentUser?.uid}`)
        .once('value')
        .then(function (snapshot) {
            const name = snapshot.child('name').val();
            const surname = snapshot.child('surname').val();

            return `${name} ${surname}`;
        });
