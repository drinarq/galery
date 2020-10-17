import React, { useEffect, useState } from 'react';
import './canvas.css';
import { Stage, Layer, Line } from 'react-konva';
import { Colors, canvasHeight, canvasWidth } from '../../constants/convasConsts';
import DrawToolbar from './Toolbar';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { LogOut } from '../../middleware/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserData } from '../../selectors/userDataSelector';
import { saveSnapshot, saveSnapshotToGallery } from '../../middleware/saveSnapshot';

const getPoint = (stage: any): Vector2d | null => {
    const { x, y } = stage.getPointerPosition();
    console.log(x + '  ' + y);
    return { x: x, y: y };
};

interface CurrentLines {
    color: Colors;
    points: number[];
}
interface setLine {
    points: number[];
}
interface Vector2d {
    x: number;
    y: number;
}

function Canvas(): JSX.Element {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(selectUserData);

    let stage: any = null;

    const [color, setColor] = useState(Colors.DARK);
    const [currentLine, setCurrentLine] = useState<CurrentLines | null>(null);
    const [lines, setLines] = useState<setLine[]>([]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [fullName, setFullName] = useState('');
    const open = Boolean(anchorEl);

    useEffect(() => {
        setFullName(state.userData);
    }, [state]);

    const handleLogout = () => {
        dispatch(LogOut(history));
    };

    const handleSaveSnapshot = () => {
        const canvas = document.querySelector('canvas');
        if (canvas !== null) {
            dispatch(saveSnapshot(canvas.toDataURL('image/png', 1)));
        }
    };

    const handleSaveSnapshotToGallery = () => {
        const canvas = document.querySelector('canvas');
        if (canvas !== null) {
            dispatch(saveSnapshotToGallery(canvas.toDataURL('image/png', 1)));
        }
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onMouseDown = () => {
        const point = getPoint(stage);
        if (point) {
            setCurrentLine({ points: [point.x, point.y], color });
        }
    };

    const onMouseMove = () => {
        if (currentLine) {
            const point = getPoint(stage);
            if (point) {
                setCurrentLine({
                    ...currentLine,
                    points: [...currentLine.points, point.x, point.y],
                });
                console.log(currentLine);
            }
        }
    };

    const onMouseUp = () => {
        const point = getPoint(stage);
        if (point) {
            setCurrentLine(null);
            setLines([...lines, { ...currentLine, points: [...currentLine?.points, point.x, point.y] }]);
        }
    };

    const setStageRef = (ref: any) => {
        if (ref) {
            stage = ref;
        }
    };

    const onChangeColor = (color: Colors) => {
        setColor(color);
    };

    const goToGallery = () => {
        history.push('/gallery');
    };

    return (
        <div className="container">
            <AppBar className="appBar" color="secondary">
                <div className="groupButton">
                    <Button className="button" onClick={goToGallery} variant="contained" color="primary">
                        Gallery
                    </Button>
                    <Button className="button" onClick={handleSaveSnapshot} variant="contained" color="primary">
                        save local
                    </Button>
                    <Button
                        className="button"
                        onClick={handleSaveSnapshotToGallery}
                        variant="contained"
                        color="primary"
                    >
                        save to Gallery
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
            <DrawToolbar color={color} onChangeColor={onChangeColor} />
            <Stage
                className="konva-container"
                ref={setStageRef}
                width={canvasWidth}
                height={canvasHeight}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
            >
                <Layer>
                    <Line {...currentLine} strokeWidth={1} stroke={color} />
                    {lines.map((line, index) => (
                        <Line key={index} {...line} strokeWidth={1} stroke={color} />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}

export default Canvas;
