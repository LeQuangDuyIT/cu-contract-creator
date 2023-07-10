import React, { useState } from 'react';
import { initialClientDatas } from '../../utils/constants';

const ClinetForm = () => {
    const [clientDatas, setClientDatas] = useState(initialClientDatas);

    const handleChange = e => {
        const { name, value } = e.target;
        const newDatas = { ...clientDatas, [name]: value };
        setClientDatas(newDatas);
    };
    console.log(clientDatas);

    return (
        <form className="input-form">
            <div className="form-core">
                <div className="form-item">
                    <label htmlFor="companyNameVi">Company name</label>
                    <input
                        type="text"
                        id="companyNameVi"
                        name="companyNameVi"
                        value={clientDatas.companyNameVi}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="companyAddressVi">Company address</label>
                    <input
                        type="text"
                        id="companyAddressVi"
                        name="companyAddressVi"
                        value={clientDatas.companyAddressVi}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="taxCode">MST/Taxcode</label>
                    <input
                        type="text"
                        id="taxCode"
                        name="taxCode"
                        value={clientDatas.taxCode}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="phoneNum">Telephone</label>
                    <input
                        type="text"
                        id="phoneNum"
                        name="phoneNum"
                        value={clientDatas.phoneNum}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="representativeName">Representative</label>
                    <input
                        type="text"
                        id="representativeName"
                        name="representativeName"
                        value={clientDatas.representativeName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-row">
                    <div className="form-item">
                        <label htmlFor="pronouns">Mr./Mrs.</label>
                        <select
                            id="pronouns"
                            name="pronouns"
                            value={clientDatas.pronouns}
                            onChange={handleChange}
                        >
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="jobTitle">Job title</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={clientDatas.jobTitle}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="form-submit-btn">
                Save
            </button>
        </form>
    );
};

export default ClinetForm;
