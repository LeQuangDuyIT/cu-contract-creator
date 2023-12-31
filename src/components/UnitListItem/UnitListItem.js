import React, { useState } from 'react';
import './UnitListItem.css';

const UnitListItem = props => {
    const { unitId, unitType, unitName, unitAddressVi, unitAddressEn, handleChangeUnit } = props;
    const [editAddressEn, setEditAddressEn] = useState(false);

    const onEditAddressEn = e => {
        e.preventDefault();
        setEditAddressEn(prev => !prev);
    };

    return (
        <tr className="unit-list-item">
            <td className="name-col">{unitName}</td>
            <td className="address-col">
                <div className="address-input">
                    <input
                        type="text"
                        name="unitAddressVi"
                        value={unitAddressVi}
                        onChange={e =>
                            handleChangeUnit(unitId, unitType, e.target.name, e.target.value)
                        }
                    />
                </div>
                <div className="address-input">
                    <input
                        className={!editAddressEn ? 'read-only' : ''}
                        type="text"
                        name="unitAddressEn"
                        placeholder="Address in English version"
                        value={unitAddressEn}
                        onChange={e =>
                            handleChangeUnit(unitId, unitType, e.target.name, e.target.value)
                        }
                        onBlur={() => setEditAddressEn(false)}
                        readOnly={!editAddressEn}
                    />
                    <button className="edit-addressEn-btn" onClick={onEditAddressEn}>
                        <img src="/assets/icon/edit-icon.png" alt="edit" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UnitListItem;
