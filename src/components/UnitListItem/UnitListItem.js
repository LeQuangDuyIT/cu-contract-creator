import React from 'react';
import './UnitListItem.css';

const UnitListItem = () => {
    return (
        <tr className="unit-list-item">
            <td className="name-col">Unit name</td>
            <td className="address-col">
                <div className="address-input">
                    <input type="text" />
                </div>
                <div className="address-input">
                    <input type="text" value="ABC" readOnly />
                    <button className="edit-addressEn-btn">
                        <img src="/assets/icon/edit-icon.png" alt="" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UnitListItem;
