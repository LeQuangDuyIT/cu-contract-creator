import React, { useState } from 'react';
import { initialClientDatas } from '../../utils/constants';

const ClinetForm = () => {
    const [clientDatas, setClientDatas] = useState(initialClientDatas);
    const [editCompanyNameEn, setEditCompanyNameEn] = useState(false);
    const [editCompanyAddressEn, setEditCompanyAddressEn] = useState(false);
    const [editJobTitleEn, setEditJobTitleEn] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        const newDatas = { ...clientDatas, [name]: value };
        setClientDatas(newDatas);
    };
    console.log(clientDatas);

    const onEditCompanyNameEn = e => {
        e.preventDefault();
        setEditCompanyNameEn(prev => !prev);
    };

    const onEditCompanyAddressEn = e => {
        e.preventDefault();
        setEditCompanyAddressEn(prev => !prev);
    };

    const onEditJobTitleEn = e => {
        e.preventDefault();
        setEditJobTitleEn(prev => !prev);
    };

    const onSubmitForm = e => {
        e.preventDefault();
    };

    return (
        <form id="type-form" className="input-form" onSubmit={onSubmitForm}>
            <div className="form-core">
                <div className="form-item">
                    <label htmlFor="companyNameVi">Company name</label>
                    <input
                        type="text"
                        id="companyNameVi"
                        name="companyNameVi"
                        value={clientDatas.companyNameVi}
                        onChange={handleChange}
                        required
                    />
                    <div className="form-item__row">
                        <input
                            className={!editCompanyNameEn ? 'read-only' : ''}
                            type="text"
                            id="companyNameEn"
                            name="companyNameEn"
                            placeholder="Company name in English version"
                            value={clientDatas.companyNameEn}
                            onChange={handleChange}
                            onBlur={() => setEditCompanyNameEn(false)}
                            readOnly={!editCompanyNameEn}
                            required
                        />
                        <button onClick={onEditCompanyNameEn}>
                            <img src="/assets/icon/edit-icon.png" alt="edit" />
                        </button>
                    </div>
                </div>

                <div className="form-item">
                    <label htmlFor="companyAddressVi">Company address</label>
                    <input
                        type="text"
                        id="companyAddressVi"
                        name="companyAddressVi"
                        value={clientDatas.companyAddressVi}
                        onChange={handleChange}
                        required
                    />
                    <div className="form-item__row">
                        <input
                            className={!editCompanyAddressEn ? 'read-only' : ''}
                            type="text"
                            id="companyAddressEn"
                            name="companyAddressEn"
                            placeholder="Company address in English version"
                            value={clientDatas.companyAddressEn}
                            onChange={handleChange}
                            onBlur={() => setEditCompanyAddressEn(false)}
                            readOnly={!editCompanyAddressEn}
                            required
                        />
                        <button onClick={onEditCompanyAddressEn}>
                            <img src="/assets/icon/edit-icon.png" alt="edit" />
                        </button>
                    </div>
                </div>
                <div className="form-item">
                    <label htmlFor="taxCode">MST/Taxcode</label>
                    <input
                        type="text"
                        id="taxCode"
                        name="taxCode"
                        value={clientDatas.taxCode}
                        onChange={handleChange}
                        required
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
                        required
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
                        <label htmlFor="jobTitleVi">Job title</label>
                        <input
                            type="text"
                            id="jobTitleVi"
                            name="jobTitleVi"
                            value={clientDatas.jobTitleVi}
                            onChange={handleChange}
                            required
                        />
                        <div className="form-item__row">
                            <input
                                className={!editJobTitleEn ? 'read-only' : ''}
                                type="text"
                                id="jobTitleEn"
                                name="jobTitleEn"
                                placeholder="Job title in English version"
                                value={clientDatas.jobTitleEn}
                                onChange={handleChange}
                                onBlur={() => setEditJobTitleEn(false)}
                                readOnly={!editJobTitleEn}
                                required
                            />
                            <button onClick={onEditJobTitleEn}>
                                <img src="/assets/icon/edit-icon.png" alt="edit" />
                            </button>
                        </div>
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
