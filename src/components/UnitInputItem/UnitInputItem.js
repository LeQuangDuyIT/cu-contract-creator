import React from 'react';
import './UnitInputItem.css';

const UnitInputItem = () => {
    return (
        <div className="unit-input-item">
            <input type="text" />
            <button>
                <img src="/assets/icon/trash-icon.png" alt="remove" />
            </button>
            <button>
                <img src="/assets/icon/move-icon.png" alt="move" />
            </button>
        </div>
    );
};

export default UnitInputItem;
