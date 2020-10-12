import React from "react";
import PropTypes from "prop-types";
import ColorPalette from "./palette";

function DrawToolbar(props: { color: string; onChangeColor: (arg0: string) => void; }) {


    return (
        <div className="toolbar">
            <ColorPalette color={props.color} onChangeColor={props.onChangeColor} />
        </div>
    );
}

export default DrawToolbar;
