import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import firebase from 'firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './store/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { firebaseConfig } from './constants/firebseConfig';

firebase.initializeApp(firebaseConfig);

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
