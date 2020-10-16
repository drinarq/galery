import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Colors, colors } from '../../constants/convasConsts';

function ColorPalette(props: { color: string; onChangeColor: (color: Colors) => void }): JSX.Element {
    return (
        <div className="color-palette">
            {colors.map((color: Colors) => (
                <div
                    key={color}
                    className={cn('color-item', {
                        selected: color === props.color,
                    })}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                        props.onChangeColor(color);
                    }}
                />
            ))}
        </div>
    );
}

ColorPalette.propTypes = {
    color: PropTypes.string.isRequired,
    onChangeColor: PropTypes.func.isRequired,
};

export default ColorPalette;
