import React, {useCallback, useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';
import '../styles/gallery.css';
import {useDispatch, useSelector} from "react-redux";
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { LogOut } from '../middleware/auth';
import {selectUserData} from "../selectors/userDataSelector";


function Gallery(): JSX.Element {

    const state=useSelector(selectUserData);
    const[fullName,setFullName]=useState('');

    useEffect(() => {
        setFullName(state.userData);
    }, [state]);

    const history = useHistory();
    const dispatch=useDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(LogOut(history));
    };

    const goToPaint=() => {
        history.push('/paint')
    };

    return (
        <div className='container'>
            <AppBar className="AppBar" color="secondary">
                <div className="CanvasButton">
                    <Button onClick={goToPaint} variant="contained" color="primary">
                        Canvas
                    </Button>
                </div>
                <Toolbar>
                    <div className="UserIcon">
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="primary"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem disabled>{fullName}</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <div className="galleryContainer">

            </div>
        </div>
    );
}

export default Gallery;
