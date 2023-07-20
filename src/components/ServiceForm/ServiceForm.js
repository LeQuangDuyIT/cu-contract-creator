import React from 'react';

const ServiceForm = props => {
    const { servicesList, serviceId, serviceNameVi, handleChangeService, handleRemoveService } =
        props;

    const onRemoveService = e => {
        e.preventDefault();
        handleRemoveService(serviceId);
    };

    return (
        <div className="unit-input-item">
            <input
                type="text"
                name="serviceNameVi"
                value={serviceNameVi}
                onChange={e => handleChangeService(serviceId, e.target.name, e.target.value)}
            />
            {servicesList.length > 1 && (
                <>
                    <button onClick={onRemoveService}>
                        <img src="/assets/icon/trash-icon.png" alt="remove" />
                    </button>
                    <button>
                        <img src="/assets/icon/move-icon.png" alt="move" />
                    </button>
                </>
            )}
        </div>
    );
};

export default ServiceForm;
