import React from 'react';
import './styles/App.css';
import Login from './view/login';
import Registration from './view/registration';
import Gallery from './view/gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Canvas from "./view/canvas/canvas";

function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/registration" component={Registration} />
                <Route path="/paint" component={Canvas} />
                <Route path="/gallery" component={Gallery} />
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
