import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './auth.css';
import { useForm } from 'react-hook-form';
import { LogIn } from '../../middleware/auth';
import { useDispatch } from 'react-redux';

function Login(): JSX.Element {
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, errors, handleSubmit, formState } = useForm({
        mode: 'onBlur',
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogIn = (data: { [x: string]: any }) => {
        dispatch(LogIn(data.email, data.password, history));
    };

    return (
        <div className="container">
            <div className="login_block">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(handleLogIn)}>
                    <input
                        name="email"
                        ref={register({
                            required: true,
                        })}
                        style={{ borderColor: errors.email && 'red' }}
                        placeholder="email"
                        type="email"
                    />
                    <input
                        name="password"
                        ref={register({
                            required: true,
                            minLength: 5,
                            pattern: /(?=.*[0-9])(?=.*[a-z])/,
                        })}
                        style={{ borderColor: errors.password && 'red' }}
                        placeholder="password"
                        type="password"
                    />

                    <input className="button" value="Вход" disabled={formState.isSubmitting} type="submit" />

                    <Link to="/registration">Регистарция</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
