import React, {useCallback, useEffect, useState} from 'react';
import '../../styles/canvas.css';
import { Stage, Layer, Line } from 'react-konva';
import { Colors, convasHeight, convasWidth } from '../../helpers/Constants/convasConsts';
import DrawToolbar from './Toolbar';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { LogOut } from '../../middleware/auth';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserData } from '../../middleware/getUserData';
import {selectUserData} from "../../selectors/userDataSelector";

// @ts-ignore
const getPoint = (stage) => {
    const { x, y } = stage.getPointerPosition();
    return { x: x, y: y };
};

function Canvas(): JSX.Element {
    const dispatch = useDispatch();
    const history = useHistory();
    const state=useSelector(selectUserData);
    // @ts-ignore
    let stage = null;

    const [color, setColor] = useState(Colors.DARK);
    const [currentLine, setCurrentLine] = useState(null);
    const [lines, setLines] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [fullName,setFullName]=useState('');
    const open = Boolean(anchorEl);

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    useEffect(() => {
        setFullName(state.userData.name);
    }, [state]);

    const handleLogout = () => {
        dispatch(LogOut(history));
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onMouseDown = () => {
        // @ts-ignore
        const { x, y } = getPoint(stage);
        // @ts-ignore
        setCurrentLine({ points: [x, y], color });
    };

    const onMouseMove = () => {
        if (currentLine) {
            // @ts-ignore
            const { x, y } = getPoint(stage);

            setCurrentLine({
                // @ts-ignore
                ...currentLine,
                points: [...currentLine.points, x, y],
            });
        }
    };

    const onMouseUp = () => {
        // @ts-ignore
        const { x, y } = getPoint(stage);
        setCurrentLine(null);
        // @ts-ignore
        setLines([...lines, { ...currentLine, points: [...currentLine.points, x, y] }]);
    };

    // @ts-ignore
    const setStageRef = (ref) => {
        if (ref) {
            stage = ref;
        }
    };

    const onChangeColor = (color: Colors) => {
        setColor(color);
    };

    const goToGallery=() => {
        history.push('/gallery')
    }

    return (
        <div className="container">
            <AppBar className="AppBar" color="secondary">
                <div className="galleryButton">
                    <Button onClick={goToGallery} variant="contained" color="primary">
                        Gallery
                    </Button>
                    <div>{fullName}</div>
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
            <DrawToolbar color={color} onChangeColor={onChangeColor} />
            <Stage
                className="konva-container"
                ref={setStageRef}
                width={convasWidth}
                height={convasHeight}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
            >
                <Layer>
                    <Line
                        {...currentLine}
                        strokeWidth={1}
                        // @ts-ignore
                        stroke={color}
                    />
                    {lines.map((line, index) => (
                        <Line
                            key={index}
                            {...line}
                            strokeWidth={1}
                            // @ts-ignore
                            stroke={line.color}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}

export default Canvas;
