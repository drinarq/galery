import React from 'react';
import './styles/App.css';
import Login from './view/login';
import Registration from './view/registration';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration}></Route>
            </Switch>
        </Router>
    );
}

export default App;
