import React, { useCallback, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../styles/gallery.css';
import {useDispatch, useSelector} from "react-redux";
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { LogOut } from '../middleware/auth';


function Gallery(): JSX.Element {

    const history = useHistory();
    const dispatch=useDispatch();
    // const selector = useSelector(state => state.asd.123)

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
    }

    return (
        <div className='container'>
            <AppBar className="AppBar" color="secondary">
                <div className="CanvasButton">
                    <Button onClick={goToPaint} variant="contained" color="primary">
                        Canvas
                    </Button>
                    <div></div>
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
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Gallery;
