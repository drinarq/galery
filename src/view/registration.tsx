import React, { useCallback, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import '../styles/login.css';
import { registration } from '../middleware/auth';
import { useDispatch } from 'react-redux';

function Registration() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [confirmPass, setConfirmPass] = useState<string>('');
    const [surname, setSurname] = useState<string>('');

    const emailChange = useCallback(({ target: { value } }) => {
        setEmail(value);
    }, []);
    const passwordChange = useCallback(({ target: { value } }) => {
        setPassword(value);
    }, []);
    const ConfirmPasswordChange = useCallback(({ target: { value } }) => {
        setConfirmPass(value);
    }, []);
    const nameChange = useCallback(({ target: { value } }) => {
        setName(value);
    }, []);
    const surnameChange = useCallback(({ target: { value } }) => {
        setSurname(value);
    }, []);

    const handleRegister = useCallback(() => {
        if (password === confirmPass) {
            dispatch(registration(email, name, surname, password, history));
        }
    }, [email, name, surname, password, history, dispatch]);

    return (
        <div className="container">
            <div className="login_block">
                <h1>Регистрация</h1>
                <TextField
                    id="standard-name"
                    label="email"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    value={email}
                    onChange={emailChange}
                ></TextField>
                <TextField
                    id="standard-name"
                    label="name"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    value={name}
                    onChange={nameChange}
                ></TextField>
                <TextField
                    id="standard-name"
                    label="name"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    value={surname}
                    onChange={surnameChange}
                ></TextField>
                <TextField
                    id="filled-adornment-password"
                    label="password"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    value={password}
                    onChange={passwordChange}
                ></TextField>
                <TextField
                    id="filled-adornment-password"
                    label="confirm password"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    value={confirmPass}
                    onChange={ConfirmPasswordChange}
                ></TextField>
                <div className="button">
                    <Button variant="contained" color="secondary" onClick={handleRegister}>
                        Зарегистрироваться
                    </Button>
                </div>
                <Link to="/login">Вход</Link>
            </div>
        </div>
    );
}

export default Registration;
