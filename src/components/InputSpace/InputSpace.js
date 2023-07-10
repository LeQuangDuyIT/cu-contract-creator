import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import TypeForm from '../TypeForm/TypeForm';
import ClinetForm from '../ClientForm/ClinetForm';
import './InputSpace.css';
import { datasParts } from '../../utils/constants';
import ScopeForm from '../ScopeForm/ScopeForm';

const InputSpace = props => {
    const { typePart, clientPart, scopePart } = datasParts;
    const [focusedPart, setFocusedPart] = useState(typePart.key);

    const handleFocused = partKey => {
        setFocusedPart(partKey);
    };

    return (
        <div className="input-space__wrap">
            <div className="input-space">
                <h1 className="app-name">Create contract</h1>
                <Menu focusedPart={focusedPart} handleFocused={handleFocused} />
                {focusedPart === typePart.key && <TypeForm />}
                {focusedPart === clientPart.key && <ClinetForm />}
                {focusedPart === scopePart.key && <ScopeForm />}
            </div>
        </div>
    );
};

export default InputSpace;
