import React, { useState } from 'react';
import { getId } from '../../utils/constants';
import ServiceForm from '../ServiceForm/ServiceForm';
import './FeeForm.css';
import ServiceListItem from '../ServiceListItem/ServiceListItem';

const FeeForm = () => {
    const initialService = {
        serviceNameVi: '',
        serviceNameEn: '',
        serviceFee: ''
    };
    const initalFeeInfo = {
        taxRate: 0.1,
        currencyUnit: 'VND'
    };
    const [servicesList, setServicesList] = useState(() => [
        { ...initialService, serviceId: getId() }
    ]);
    const [feeInfo, setFeeInfo] = useState(initalFeeInfo);
    const shouldShowServicesList = servicesList[0].serviceNameVi || servicesList.length > 1;

    const subTotal = servicesList.reduce((sum, service) => sum + service.serviceFee, 0);

    console.log(servicesList);

    const handleAddService = e => {
        e.preventDefault();
        const shouldAdd = servicesList.every(service => service.serviceNameVi !== '');
        if (shouldAdd) {
            const newService = { ...initialService, serviceId: getId() };
            setServicesList([...servicesList, newService]);
        }
    };

    const handleRemoveService = serviceId => {
        const newServicesList = servicesList.filter(service => service.serviceId !== serviceId);
        setServicesList(newServicesList);
    };

    const handleChangeService = (serviceId, serviceKey, newValue) => {
        const newServicesList = servicesList.map(service =>
            service.serviceId === serviceId ? { ...service, [serviceKey]: newValue } : service
        );
        setServicesList(newServicesList);
    };

    const handleChangeFeeInfo = e => {
        const { name, value } = e.target;
        setFeeInfo({ ...feeInfo, [name]: value });
    };
    console.log(feeInfo);

    return (
        <form className="input-form">
            <div className="form-core">
                <div className="services-space">
                    <h3 className="section-title">Service name</h3>
                    {servicesList.map(service => (
                        <ServiceForm
                            key={service.serviceId}
                            {...service}
                            servicesList={servicesList}
                            handleRemoveService={handleRemoveService}
                            handleChangeService={handleChangeService}
                        />
                    ))}
                    <button className="add-unit-btn" onClick={handleAddService}>
                        <i className="fa-sharp fa-solid fa-plus"></i>
                        <span>Add service</span>
                    </button>
                </div>
                <div className="fee-info-space">
                    <h3>Fee information </h3>
                    <div className="select-space">
                        <div className="select__wrap">
                            <label htmlFor="taxRate">Tax rate</label>
                            <select
                                name="taxRate"
                                id="taxRate"
                                value={feeInfo.taxRate}
                                onChange={handleChangeFeeInfo}
                            >
                                <option value={0}>0%</option>
                                <option value={0.08}>8%</option>
                                <option value={0.1}>10%</option>
                            </select>
                        </div>
                        <div className="select__wrap">
                            <label htmlFor="currencyUnit">Currency</label>
                            <select
                                name="currencyUnit"
                                id="currencyUnit"
                                value={feeInfo.currencyUnit}
                                onChange={handleChangeFeeInfo}
                            >
                                <option value="VND">VND</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </div>
                </div>
                {shouldShowServicesList && (
                    <div className="services-list-table">
                        <div className="thead__wrap">
                            <table className="units-table thead">
                                <tbody>
                                    <tr>
                                        <td className="service-name-col">Service name</td>
                                        <td className="service-cost-col">Cost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tbody__wrap">
                            <table className="units-table tbody">
                                <tbody>
                                    {servicesList.map(service => (
                                        <ServiceListItem
                                            key={service.serviceId}
                                            {...service}
                                            handleChangeService={handleChangeService}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="tfoot__wrap">
                            <div className="bill-space">
                                <div className="bill-row">
                                    <p className="row__title">Sub total</p>
                                    <p className="row__number">
                                        {subTotal.toLocaleString('en-US')}
                                    </p>
                                </div>
                                <div className="bill-row">
                                    <p className="row__title">8% VAT amount</p>
                                    <p className="row__number">
                                        {(subTotal * feeInfo.taxRate).toLocaleString('en-US')}
                                    </p>
                                </div>
                                <div className="bill-row">
                                    <p className="row__title">Total payment</p>
                                    <p className="row__number">
                                        {(subTotal * (1 + feeInfo.taxRate)).toLocaleString('en-US')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button type="submit" className="form-submit-btn">
                Save
            </button>
        </form>
    );
};

export default FeeForm;
