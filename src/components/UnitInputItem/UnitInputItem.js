import React, { useState } from 'react';
import './UnitInputItem.css';

const UnitInputItem = props => {
    const {
        unitsList,
        unitId,
        unitName,
        unitType,
        unitAddressVi,
        unitAddressEn,
        handleChangeUnitName,
        handleRemoveUnit
    } = props;
    const [unitNameValue, setUnitNameValue] = useState(unitName);

    const onInputValue = e => {
        const inputValue = e.target.value;
        setUnitNameValue(inputValue);
        handleChangeUnitName(unitId, unitType, inputValue);
    };

    const onRemoveUnit = e => {
        e.preventDefault();
        handleRemoveUnit(unitId, unitType);
    };

    return (
        <div className="unit-input-item">
            <input type="text" value={unitNameValue} onChange={onInputValue} />
            {unitsList.length > 1 && (
                <>
                    <button onClick={onRemoveUnit}>
                        <img src="/assets/icon/trash-icon.png" alt="remove" />
                    </button>
                    <button>
                        <img src="/assets/icon/move-icon.png" alt="move" />
                    </button>
                </>
            )}
        </div>
    );
};

export default UnitInputItem;
