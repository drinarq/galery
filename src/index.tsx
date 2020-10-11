import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import firebase from 'firebase';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

const firebaseConfig = {
    apiKey: 'AIzaSyDRC8cKUH8box0qsBCqdxCg6x0wAQl84S0',
    authDomain: 'gallery-3af7c.firebaseapp.com',
    databaseURL: 'https://gallery-3af7c.firebaseio.com',
    projectId: 'gallery-3af7c',
    storageBucket: 'gallery-3af7c.appspot.com',
    messagingSenderId: '79422789850',
    appId: '1:79422789850:web:a1e84119ac7885af4eade3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
