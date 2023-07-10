import React, { useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './ScopeForm.css';
import UnitsForm from '../UnitsForm/UnitsForm';

const ScopeForm = () => {
    const [onProduction, setOnProduction] = useState(false);
    const [onProcessing, setOnProcessing] = useState(false);

    return (
        <form className="input-form">
            <div className="form-core">
                <div className="unit-space">
                    <div className="unit-toggle-btn" onClick={() => setOnProduction(prev => !prev)}>
                        <h2>Production units</h2>
                        <ToggleButton onProduction={onProduction} />
                    </div>
                    {onProduction && <UnitsForm/>}
                </div>
                <div className="unit-space">
                    <div className="unit-toggle-btn" onClick={() => setOnProcessing(prev => !prev)}>
                        <h2>Processing units</h2>
                        <ToggleButton onProcessing={onProcessing} />
                    </div>
                    {onProcessing && <p>B</p>}
                </div>
            </div>
            <button type="submit" className="form-submit-btn">
                Save
            </button>
        </form>
    );
};

export default ScopeForm;
