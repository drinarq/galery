import React from "react";
import PropTypes from "prop-types";
import ColorPalette from "./ColorPalette";

function DrawToolbar(props) {


    return (
        <div className="toolbar">
            <ColorPalette color={props.color} onChangeColor={props.onChangeColor} />
        </div>
    );
}

DrawToolbar.propTypes = {
    color: PropTypes.string.isRequired,
    onChangeColor: PropTypes.func.isRequired,
};

export default DrawToolbar;
