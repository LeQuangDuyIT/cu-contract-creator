import React from 'react';
import UnitInputItem from '../UnitInputItem/UnitInputItem';
import './UnitsForm.css';
import UnitListItem from '../UnitListItem/UnitListItem';

const UnitsForm = props => {
    const { productionList, processingList, handleChangeUnit, handleAddUnit, handleRemoveUnit } =
        props;
    const unitsList = productionList || processingList;
    const unitType = (productionList && 'production') || (processingList && 'processing');
    const shouldShowUnitsList = unitsList[0].unitName !== '' || unitsList.length > 1;

    const onClickAddUnit = e => {
        e.preventDefault();
        const shouldAdd = unitsList.every(unit => unit.unitName !== '');
        if (shouldAdd) {
            handleAddUnit(unitType);
        }
    };

    return (
        <div className="units-form">
            <div className="units-section">
                <h3 className="section-title">Unit name</h3>
                {unitsList.map(unit => (
                    <UnitInputItem
                        key={unit.unitId}
                        {...unit}
                        unitsList={unitsList}
                        handleChangeUnit={handleChangeUnit}
                        handleRemoveUnit={handleRemoveUnit}
                    />
                ))}
                <button className="add-unit-btn" onClick={onClickAddUnit}>
                    <i className="fa-sharp fa-solid fa-plus"></i>
                    <span>Add unit</span>
                </button>
            </div>
            {shouldShowUnitsList && (
                <div className="units-section">
                    <h3 className="section-title">List of units</h3>
                    <div className="thead__wrap">
                        <table className="units-table thead">
                            <tbody>
                                <tr>
                                    <td className="name-col">Unit name</td>
                                    <td className="address-col">Address</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tbody__wrap">
                        <table className="units-table tbody">
                            <tbody>
                                {unitsList.map(unit => (
                                    <UnitListItem
                                        key={unit.unitId}
                                        {...unit}
                                        handleChangeUnit={handleChangeUnit}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnitsForm;
