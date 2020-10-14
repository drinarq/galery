import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Colors, colors} from '../../helpers/Constants/convasConsts';

function ColorPalette(props: { color: string; onChangeColor: (arg0: string) => void }) {
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
