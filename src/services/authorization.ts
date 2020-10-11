import firebase from 'firebase';

export const Logout = () => {
    return firebase.auth().signOut();
};

export const LogIN = (email: string, password: string) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (err) {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log('err Code: ' + errorCode);
            console.log('err Message: ' + errorMessage);
        });
};

export const registration = (email: string, name: string, surname: string, password: string) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            firebase.database().ref().child('users').child(res.user.uid).set({ email, name, surname });
        });
};
