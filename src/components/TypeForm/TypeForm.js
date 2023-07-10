import React, { useState } from 'react';
import { initialTypeDatas, standardList } from '../../utils/constants';
import './TypeForm.css';

const TypeForm = () => {
    const [typeDatas, setTypeDatas] = useState(initialTypeDatas);
    const [subStandards, setSubStandards] = useState(standardList[0].subStandards);
    const [checkedList, setCheckedList] = useState([]);

    console.log(typeDatas);

    const handleChange = e => {
        const { name, value } = e.target;
        const newDatas = { ...typeDatas, [name]: value };
        setTypeDatas(newDatas);

        if (name === 'standard') {
            const standardObj = standardList.find(standard => standard.standardValue === value);
            setSubStandards(standardObj.subStandards);
            setCheckedList([]);
            setTypeDatas(prevDatas => ({ ...prevDatas, subStandards: [] }));
        }
    };

    const onCheckedSubStandard = subStandardId => {
        const isChecked = checkedList.includes(subStandardId);
        if (isChecked) {
            const newCheckedList = checkedList.filter(subStandard => subStandard !== subStandardId);
            setCheckedList(newCheckedList);

            const newDatas = { ...typeDatas, subStandards: newCheckedList };
            setTypeDatas(newDatas);
        } else {
            setCheckedList(prevCheckedList => {
                const newCheckedList = [...prevCheckedList, subStandardId];

                const newDatas = { ...typeDatas, subStandards: newCheckedList };
                setTypeDatas(newDatas);

                return newCheckedList;
            });
        }
    };

    const onSubmitForm = e => {
        e.preventDefault();
    };

    return (
        <form className="input-form type-form" onSubmit={onSubmitForm}>
            <div className="form-core">
                <div className="form-item">
                    <label htmlFor="contractNum">Contract number</label>
                    <input
                        type="text"
                        id="contractNum"
                        name="contractNum"
                        value={typeDatas.contractNum}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={typeDatas.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="standard">Standard</label>
                    <select
                        id="standard"
                        name="standard"
                        value={typeDatas.standard}
                        onChange={handleChange}
                    >
                        {standardList.map(standard => (
                            <option key={standard.standardValue} value={standard.standardValue}>
                                {standard.standardName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="aPRNum">APR number</label>
                    <input
                        type="text"
                        id="aPRNum"
                        name="aPRNum"
                        value={typeDatas.aPRNum}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="sub-standard-checkbox">
                    {subStandards.length > 0 &&
                        subStandards.map(subStandard => (
                            <div key={subStandard.subStandardId} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id={subStandard.subStandardId}
                                    checked={checkedList.includes(subStandard.subStandardId)}
                                    onChange={() => onCheckedSubStandard(subStandard.subStandardId)}
                                />

                                <label htmlFor={subStandard.subStandardId}>
                                    {subStandard.subStandardName}
                                </label>
                            </div>
                        ))}
                </div>
            </div>
            <button type="submit" className="form-submit-btn">
                Save
            </button>
        </form>
    );
};

export default TypeForm;
