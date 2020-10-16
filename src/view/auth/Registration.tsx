import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './auth.css';
import { registration } from '../../middleware/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Registration(): JSX.Element {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: 'onBlur',
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const handleRegister = (data: { [x: string]: string }) => {
        dispatch(registration(data.email, data.name, data.surname, data.password, history));
    };

    return (
        <div className="container">
            <div className="login_block">
                <h1>Регистрация</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
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
                        name="name"
                        ref={register({
                            required: true,
                            minLength: 2,
                            pattern: /(?=.*[a-z])/,
                        })}
                        placeholder="name"
                        style={{ borderColor: errors.name && 'red' }}
                    />
                    <input
                        name="surname"
                        ref={register({
                            required: true,
                            minLength: 2,
                        })}
                        placeholder="surname"
                        style={{ borderColor: errors.surname && 'red' }}
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
                    <input
                        name="confirmPass"
                        ref={register({
                            required: true,
                            minLength: 5,
                            pattern: /(?=.*[0-9])(?=.*[a-z])/,
                        })}
                        placeholder="confirmPassword"
                        type="password"
                    />
                    <input className="button" value="Регистрация" disabled={formState.isSubmitting} type="submit" />
                </form>

                <Link to="/">Вход</Link>
            </div>
        </div>
    );
}

export default Registration;
