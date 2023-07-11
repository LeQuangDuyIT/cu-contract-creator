import React, { useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './ScopeForm.css';
import UnitsForm from '../UnitsForm/UnitsForm';

const ScopeForm = () => {
    const initialUnit = {
        unitId: new Date().getTime(),
        unitName: '',
        unitAddressVi: '',
        unitAddressEn: ''
    };

    const [onProduction, setOnProduction] = useState(false);
    const [onProcessing, setOnProcessing] = useState(false);
    const [productionList, setProductionList] = useState([initialUnit]);
    const [processingList, setProcessingList] = useState([initialUnit]);

    const handleAddUnit = (unitName, unitType) => {
        const newUnit = {
            ...initialUnit,
            unitId: new Date().getTime(),
            unitName: unitName
        };
        if (unitType === 'production') {
            setProductionList([newUnit, ...productionList]);
        } else if (unitType === 'processing') {
            setProductionList([newUnit, ...processingList]);
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
                        <UnitsForm productionList={productionList} handleAddUnit={handleAddUnit} />
                    )}
                </div>
                <div className="unit-space">
                    <div className="unit-toggle-btn" onClick={() => setOnProcessing(prev => !prev)}>
                        <h2>Processing units</h2>
                        <ToggleButton onProcessing={onProcessing} />
                    </div>
                    {onProcessing && <UnitsForm processingList={processingList} />}
                </div>
            </div>
            <button type="submit" className="form-submit-btn">
                Save
            </button>
        </form>
    );
};

export default ScopeForm;
