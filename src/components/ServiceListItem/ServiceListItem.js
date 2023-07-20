import React, { useState } from 'react';
import './ServiceListItem.css';

const ServiceListItem = props => {
    const { serviceId, serviceNameVi, serviceNameEn, serviceFee, handleChangeService } = props;

    const [editServiceNameEn, setEditServiceNameEn] = useState(false);

    const onChangeServiceNameEn = e => {
        e.preventDefault();
        setEditServiceNameEn(prev => !prev);
    };

    return (
        <tr className="service-list-item">
            <td className="service-name-col">
                <p className="service-name__vi">{serviceNameVi || 'Updating...'}</p>
                <div className="service-name__en">
                    <input
                        className={!editServiceNameEn ? 'read-only' : ''}
                        placeholder="Service name in English version"
                        type="text"
                        name="serviceNameEn"
                        value={serviceNameEn}
                        onChange={e =>
                            handleChangeService(serviceId, e.target.name, e.target.value)
                        }
                        onBlur={() => setEditServiceNameEn(false)}
                        readOnly={!editServiceNameEn}
                    />
                    <button onClick={onChangeServiceNameEn}>
                        <img src="/assets/icon/edit-icon.png" alt="" />
                    </button>
                </div>
            </td>
            <td className="service-cost-col">
                <input
                    type="text"
                    name="serviceFee"
                    value={serviceFee.toLocaleString('en-US')}
                    onChange={e =>
                        handleChangeService(
                            serviceId,
                            e.target.name,
                            +e.target.value.replace(/,/g, '')
                        )
                    }
                />
            </td>
        </tr>
    );
};

export default ServiceListItem;
