import React, { useState } from 'react';
import './UnitInputItem.css';

const UnitInputItem = props => {
    const { unitsList, unitId, unitName, unitType, handleChangeUnit, handleRemoveUnit } = props;

    const onRemoveUnit = e => {
        e.preventDefault();
        handleRemoveUnit(unitId, unitType);
    };

    return (
        <div className="unit-input-item">
            <input
                type="text"
                value={unitName}
                onChange={e => handleChangeUnit(unitId, unitType, 'unitName', e.target.value)}
            />
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
