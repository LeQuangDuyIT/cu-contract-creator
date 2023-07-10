import React from 'react';
import { datasParts } from '../../utils/constants';
import './Menu.css';

const Menu = props => {
    const { focusedPart, handleFocused } = props;
    return (
        <ul className="menu">
            {Object.values(datasParts).map(partObj => (
                <li
                    key={partObj.key}
                    className={`menu-item ${focusedPart === partObj.key && 'menu-item__focus'}`}
                    onClick={() => handleFocused(partObj.key)}
                >
                    {partObj.menuName}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
