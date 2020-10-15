import React, {useCallback, useEffect, useState} from 'react';
import { useHistory} from 'react-router-dom';
import '../styles/gallery.css';
import {useDispatch, useSelector} from "react-redux";
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { LogOut } from '../middleware/auth';
import {selectUserData} from "../selectors/userDataSelector";
import {selectImage} from "../selectors/getImageSelector";
import zIndex from "@material-ui/core/styles/zIndex";
import {getImage} from "../middleware/getImage";


function Gallery(): JSX.Element {

    const userDataState=useSelector(selectUserData);
    const imageState=useSelector(selectImage);
    const[fullName,setFullName]=useState('');

    useEffect(() => {
        setFullName(userDataState.userData);
        dispatch(getImage());
    }, [userDataState,imageState]);

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
            <AppBar className="appBar" color="secondary">
                <div className="canvasButton">
                    <Button onClick={goToPaint} variant="contained" color="primary">
                        Canvas
                    </Button>
                </div>
                <Toolbar>
                    <div className="userIcon">
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
                {imageState.images.map( (value, index)=>
                     <img src={value} key={`tesafasfa${index}`} className="testDiv" />
                )}
            </div>
        </div>
    );
}

export default Gallery;
