import React, {useState} from "react";
import '../../styles/canvas.css';
import {Stage, Layer, Line} from 'react-konva';
import { MODE, COLOR_MAP } from "../../helpers/Constants/convasConsts";


const getScaledPoint = (stage: { getPointerPosition: () => { x: any; y: any; }; }, scale: number) => {
    const { x, y } = stage.getPointerPosition();
    return { x: x / scale, y: y / scale };
};

function Canvas():JSX.Element{

    let stage;
    const [color, setColor] = useState("DARK");
    const [scale, setScale] = useState(1);
    const [mode, setMode] = useState(MODE.PENCIL);
    const [currentLine, setCurrentLine] = useState(null);
    const [lines, setLines] = useState([]);

    const onMouseDown = () => {
        const { x, y } = getScaledPoint(stage, scale);
        setCurrentLine({ points: [x, y], color });
    };

    const onMouseMove = () => {
        if (currentLine) {
            const { x, y } = getScaledPoint(stage, scale);
            switch (mode) {

                case MODE.PENCIL:
                    setCurrentLine({
                        ...currentLine,
                        points: [...currentLine.points, x, y]
                    });
                    break;
                case MODE.LINE:
                    const [x0, y0] = currentLine.points;
                    setCurrentLine({
                        ...currentLine,
                        points: [x0, y0, x, y]
                    });
                    break;
                default:
            }
        }
    };

    const onMouseUp = () => {
        const { x, y } = getScaledPoint(stage, scale);
        setCurrentLine(null);
        setLines([
            ...lines,
            { ...currentLine, points: [...currentLine.points, x, y] }
        ]);
    };

    const onSetMode = mode => {
        setMode(mode);
    };

    const setStageRef = ref => {
        if (ref) {
            stage = ref;
        }
    };

    const onChangeColor = color => {
        setColor(color);
    };

    const onChangeScale = delta => {
        setScale(scale + delta);
    };

    return (
            <div className="container">
            <Stage
             className="konva-container">
                <Layer>
                    <Line
                        {...currentLine}
                        scale={{ x: scale, y: scale }}
                        strokeWidth={1}
                        stroke={COLOR_MAP[color]}
                    />
                    {lines.map((line, index) => (
                        <Line
                            key={index}
                            {...line}
                            scale={{ x: scale, y: scale }}
                            strokeWidth={1}
                            stroke={COLOR_MAP[line.color]}
                        />
                    ))}
                </Layer>

            </Stage>
            </div>
        );
}


export default Canvas;