import React from "react";
import PropTypes from "prop-types";
import ColorPalette from "./palette";

// @ts-ignore
function DrawToolbar(props) {


    return (
        <div className="toolbar">
            <ColorPalette color={props.color} onChangeColor={props.onChangeColor} />
        </div>
    );
}

export default DrawToolbar;
