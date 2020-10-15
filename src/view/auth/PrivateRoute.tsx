import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGetUserIdState } from '../selectors/userIdSelector';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isOnline = useSelector(selectGetUserIdState);
    return <Route {...rest} render={(props) => (!!isOnline ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;
