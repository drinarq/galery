import React from 'react';
import './styles/App.css';
import Login from './view/auth/Login';
import Registration from './view/auth/Registration';
import Gallery from './view/gallery/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Canvas from './view/canvas/Canvas';
import PrivateRoute from './view/auth/PrivateRoute';

function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/registration" component={Registration} />
                <PrivateRoute exact component={Canvas} path="/paint" />
                <PrivateRoute exact path="/gallery" component={Gallery} />
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
