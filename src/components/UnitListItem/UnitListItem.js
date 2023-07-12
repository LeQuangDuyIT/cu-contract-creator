import React, { useState } from 'react';
import './UnitListItem.css';

const UnitListItem = props => {
    const { unitId, unitType, unitName, unitAddressVi, unitAddressEn, handleChangeUnitAddress } =
        props;
    const [addressVi, setAddressVi] = useState(unitAddressVi);
    const [addressEn, setAddressEn] = useState(unitAddressEn);
    const [editAddressEn, setEditAddressEn] = useState(false);

    const onChangeAddress = (e, lang) => {
        const addressValue = e.target.value;
        if (lang === 'vi') {
            setAddressVi(addressValue);
        } else if (lang === 'en') {
            setAddressEn(addressValue);
        }
        handleChangeUnitAddress(unitId, unitType, addressValue, lang);
    };

    const onEditAddressEn = e => {
        e.preventDefault();
        setEditAddressEn(prev => !prev);
    };

    return (
        <tr className="unit-list-item">
            <td className="name-col">{unitName}</td>
            <td className="address-col">
                <div className="address-input">
                    <input type="text" value={addressVi} onChange={e => onChangeAddress(e, 'vi')} />
                </div>
                <div className="address-input">
                    <input
                        className={!editAddressEn ? 'read-only' : ''}
                        type="text"
                        placeholder="Address in English version"
                        value={addressEn}
                        onChange={e => onChangeAddress(e, 'en')}
                        onBlur={() => setEditAddressEn(false)}
                        readOnly={!editAddressEn}
                    />
                    <button className="edit-addressEn-btn" onClick={onEditAddressEn}>
                        <img src="/assets/icon/edit-icon.png" alt="" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UnitListItem;
