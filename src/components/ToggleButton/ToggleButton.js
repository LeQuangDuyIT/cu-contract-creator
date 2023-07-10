import React from 'react';
import './ToggleButton.css';

const ToggleButton = props => {
    const { onProduction, onProcessing } = props;
    return (
        <div className={`toggle-wrap ${onProduction && 'btn-on'} ${onProcessing && 'btn-on'}`}>
            <div className="toggle-circle"></div>
        </div>
    );
};

export default ToggleButton;
