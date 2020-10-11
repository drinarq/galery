import React, { useCallback, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../styles/login.css';

function Login(): JSX.Element {
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const emailChange = useCallback(({ target: { value } }) => {
        setEmail(value);
    }, []);
    const passwordChange = useCallback(({ target: { value } }) => {
        setPassword(value);
    }, []);

    return (
        <div className="container">
            <div className="login_block">
                <h1>Login</h1>
                {/*{isLoading ? (*/}
                {/*    <div className="loader">*/}
                {/*        <CircularProgress color="secondary" size="6rem" />*/}
                {/*    </div>*/}
                {/*) : null}*/}
                <TextField
                    id="standard-name"
                    label="email"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    value={email}
                    onChange={emailChange}
                />
                <TextField
                    id="filled-adornment-password"
                    type="password"
                    label="password"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    value={password}
                    onChange={passwordChange}
                />
                <div className="button">
                    <Button variant="contained" color="secondary" /*onClick={logIn}*/>
                        Вход
                    </Button>
                </div>
                <Link to="/registration">Регистарция</Link>
            </div>
        </div>
    );
}

export default Login;
