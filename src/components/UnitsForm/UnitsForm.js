import React from 'react';
import UnitInputItem from '../UnitInputItem/UnitInputItem';
import './UnitsForm.css';
import UnitListItem from '../UnitListItem/UnitListItem';

const UnitsForm = () => {
    return (
        <div className="units-form">
            <div className="units-section">
                <h3 className="section-title">Units name</h3>
                <UnitInputItem />
                <button className="add-unit-btn">
                    <i className="fa-sharp fa-solid fa-plus"></i>
                    <span>Add unit</span>
                </button>
            </div>
            <div className="units-section">
                <h3 className="section-title">List of units</h3>
                <div className="thead__wrap">
                    <table className="units-table thead">
                        <tr>
                            <td>Unit name</td>
                            <td>Address</td>
                        </tr>
                    </table>
                </div>
                <div className="tbody__wrap">
                    <table className="units-table tbody">
                        <UnitListItem />
                        <UnitListItem />
                        <UnitListItem />
                        <UnitListItem />
                        <UnitListItem />
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UnitsForm;
