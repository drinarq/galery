import React, { useState } from 'react';
import '../../styles/canvas.css';
import { Stage, Layer, Line } from 'react-konva';
import {  COLOR_MAP } from '../../helpers/Constants/convasConsts';
import DrawToolbar from './Toolbar';

// @ts-ignore
const getScaledPoint = (stage, scale) => {
    const { x, y } = stage.getPointerPosition();
    return { x: x / scale, y: y / scale };
};

function Canvas(): JSX.Element {
    // @ts-ignore
    let stage=null;
    const [color, setColor] = useState("DARK");
    const [scale, setScale] = useState(1);
    const [currentLine, setCurrentLine] = useState(null);
    const [lines, setLines] = useState([]);

    const onMouseDown = () => {
        // @ts-ignore
        const { x, y } = getScaledPoint(stage, scale);
        console.log("onMouseDown");
        // @ts-ignore
        setCurrentLine({ points: [x, y], color });
    };

    const onMouseMove = () => {
        if (currentLine) {
            // @ts-ignore
            const { x, y } = getScaledPoint(stage, scale);

            setCurrentLine({
                // @ts-ignore
                ...currentLine,
                points: [...currentLine.points, x, y],
            });
        }
    };

    const onMouseUp = () => {
        // @ts-ignore
        const { x, y } = getScaledPoint(stage, scale);
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

    const onChangeColor = (color: string) => {
        setColor(color);
    };

    return (
        <div className="container">
            <DrawToolbar
                color={color}
                // @ts-ignore
                scale={scale}
                onChangeColor={onChangeColor}
            />
            <Stage
                ref={setStageRef}
                className="konva-container"
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
            >
                <Layer>
                    <Line
                        {...currentLine}
                        scale={{ x: scale, y: scale }}
                        strokeWidth={1}
                        // @ts-ignore
                        stroke={COLOR_MAP[color]}
                    />
                    {lines.map((line, index) => (
                        <Line
                            key={index}
                            {...line}
                            scale={{ x: scale, y: scale }}
                            strokeWidth={1}
                            // @ts-ignore
                            stroke={COLOR_MAP[line.color]}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}

export default Canvas;
