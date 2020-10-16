import * as firebase from 'firebase';

export const Logout = (): Promise<void> => {
    return firebase.auth().signOut();
};

export const LogIN = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const registration = (email: string, name: string, surname: string, password: string): Promise<void> => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            firebase
                .database()
                .ref()
                .child(`users/${res.user?.uid}`)
                .set({ email: email, name: name, surname: surname });
        });
};

export const getUserId = (): string | undefined => {
    return firebase.auth().currentUser?.uid;
};
