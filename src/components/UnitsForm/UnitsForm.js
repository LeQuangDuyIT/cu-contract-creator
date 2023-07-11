import React from 'react';
import UnitInputItem from '../UnitInputItem/UnitInputItem';
import './UnitsForm.css';
import UnitListItem from '../UnitListItem/UnitListItem';

const UnitsForm = props => {
    const { productionList, processingList, handleAddUnit } = props;
    const unitsList = productionList || processingList;
    const unitType = (productionList && 'production') || (processingList && 'processing');
    let unitNameValue = '';

    const onChangeNameValue = nameValue => {
        unitNameValue = nameValue;
    };

    const onClickAddUnit = e => {
        e.preventDefault();
        if (unitNameValue !== '') {
            handleAddUnit(unitNameValue, unitType);
        }
    };

    return (
        <div className="units-form">
            <div className="units-section">
                <h3 className="section-title">Units name</h3>
                {unitsList.map(unit => (
                    <UnitInputItem
                        key={unit.id}
                        {...unit}
                        unitsList={unitsList}
                        onChangeNameValue={onChangeNameValue}
                    />
                ))}
                <button className="add-unit-btn" onClick={onClickAddUnit}>
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
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UnitsForm;
