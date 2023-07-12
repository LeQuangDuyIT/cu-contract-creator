import React, { useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './ScopeForm.css';
import UnitsForm from '../UnitsForm/UnitsForm';
import { getId } from '../../utils/constants';

const ScopeForm = () => {
    const initialUnit = {
        unitName: '',
        unitAddressVi: '',
        unitAddressEn: ''
    };

    const [onProduction, setOnProduction] = useState(false);
    const [onProcessing, setOnProcessing] = useState(false);
    const [productionList, setProductionList] = useState(() => [
        {
            ...initialUnit,
            unitId: getId(),
            unitType: 'production'
        }
    ]);
    const [processingList, setProcessingList] = useState(() => [
        {
            ...initialUnit,
            unitId: getId(),
            unitType: 'processing'
        }
    ]);

    const handleChangeUnit = (unitId, unitType, unitKey, newUnitName) => {
        if (unitType === 'production') {
            const newProductionList = productionList.map(unit =>
                unit.unitId === unitId ? { ...unit, [unitKey]: newUnitName } : unit
            );
            setProductionList(newProductionList);
        } else if (unitType === 'processing') {
            const newProcessingList = processingList.map(unit =>
                unit.unitId === unitId ? { ...unit, [unitKey]: newUnitName } : unit
            );
            setProcessingList(newProcessingList);
        }
    };
    console.log(productionList);

    const handleAddUnit = unitType => {
        const newUnit = {
            ...initialUnit,
            unitId: getId(),
            unitType: unitType
        };
        if (unitType === 'production') {
            setProductionList([...productionList, newUnit]);
        } else if (unitType === 'processing') {
            setProcessingList([...processingList, newUnit]);
        }
    };

    const handleRemoveUnit = (unitId, unitType) => {
        if (unitType === 'production') {
            const newProductionList = productionList.filter(unit => unit.unitId !== unitId);
            setProductionList(newProductionList);
        } else if (unitType === 'processing') {
            const newProcessingList = processingList.filter(unit => unit.unitId !== unitId);
            setProcessingList(newProcessingList);
        }
    };

    return (
        <form className="input-form">
            <div className="form-core">
                <div className="unit-space">
                    <div className="unit-toggle-btn" onClick={() => setOnProduction(prev => !prev)}>
                        <h2>Production units</h2>
                        <ToggleButton onProduction={onProduction} />
                    </div>
                    {onProduction && (
                        <UnitsForm
                            productionList={productionList}
                            handleChangeUnit={handleChangeUnit}
                            handleAddUnit={handleAddUnit}
                            handleRemoveUnit={handleRemoveUnit}
                        />
                    )}
                </div>
                <div className="unit-space">
                    <div className="unit-toggle-btn" onClick={() => setOnProcessing(prev => !prev)}>
                        <h2>Processing units</h2>
                        <ToggleButton onProcessing={onProcessing} />
                    </div>
                    {onProcessing && (
                        <UnitsForm
                            processingList={processingList}
                            handleChangeUnit={handleChangeUnit}
                            handleAddUnit={handleAddUnit}
                            handleRemoveUnit={handleRemoveUnit}
                        />
                    )}
                </div>
            </div>
            <button type="submit" className="form-submit-btn">
                Save
            </button>
        </form>
    );
};

export default ScopeForm;
