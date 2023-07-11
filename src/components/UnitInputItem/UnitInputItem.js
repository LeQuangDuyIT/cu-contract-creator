import React, { useState } from 'react';
import './UnitInputItem.css';

const UnitInputItem = props => {
    const { unitsList, unitId, unitName, unitAddressVi, unitAddressEn, onChangeNameValue } = props;
    const [unitNameValue, setUnitNameValue] = useState(unitsList[unitsList.length - 1].unitName);

    const onInputValue = e => {
        const inputValue = e.target.value;
        onChangeNameValue(inputValue);
        setUnitNameValue(inputValue);
    };

    return (
        <div className="unit-input-item">
            <input type="text" value={unitNameValue} onChange={onInputValue} />
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
