import firebase from 'firebase';

export const saveSnapshot = (image: string): firebase.database.ThenableReference =>
    firebase.database().ref(`users/gallery/`).push(image);
