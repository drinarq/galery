import React from 'react';
import ColorPalette from './Palette';
import PropTypes from 'prop-types';
import { Colors } from '../../constants/convasConsts';

function DrawToolbar(props: { color: string; onChangeColor: (color: Colors) => void }): JSX.Element {
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
