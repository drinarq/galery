import React, { useCallback, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import '../styles/login.css';
import { useForm} from "react-hook-form";
import {LogIn} from "../middleware/auth";
import {useDispatch, useSelector} from "react-redux";

function Gallery(): JSX.Element {

    const history = useHistory()
    const dispatch=useDispatch();
    const selector = useSelector(state => state.asd.123)

    const {register,errors, handleSubmit,formState }= useForm({
        mode:"onBlur",
    });

    // @ts-ignore
    const handleLogIn = ((data): SubmitHandler<Record<string, any>> => {
        dispatch(LogIn(data.email,data.password, history));
    });

    return (
        <div></div>
    );
}

export default Gallery;
