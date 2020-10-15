import React from 'react';
import './styles/App.css';
import Login from './view/Login';
import Registration from './view/Registration';
import Gallery from './view/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Canvas from './view/canvas/canvas';
import PrivateRoute from './view/PrivateRoute';

function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/registration" component={Registration} />
                <PrivateRoute path="/paint" component={Canvas} />
                <PrivateRoute path="/gallery" component={Gallery} />
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
