export const datasParts = {
    typePart: {
        menuName: 'Contract type',
        key: 'type'
    },
    clientPart: {
        menuName: 'Client info',
        key: 'client'
    },
    scopePart: {
        menuName: 'Scope',
        key: 'scope'
    },
    feePart: {
        menuName: 'Service fee',
        key: 'fee'
    }
};

export const standardList = [
    {
        standardName: 'Organic',
        standardValue: 'organic',
        subStandards: [
            {
                subStandardName: 'EU 834/2007 & 889/2008',
                subStandardId: 'EU-OLD'
            },
            {
                subStandardName: 'New EU 848/2018',
                subStandardId: 'EU-NEW'
            },
            {
                subStandardName: 'USDA NOP',
                subStandardId: 'NOP'
            },
            {
                subStandardName: 'JAS',
                subStandardId: 'JAS'
            },
            {
                subStandardName: 'TOS',
                subStandardId: 'TOS'
            },
            {
                subStandardName: 'KOREA ORGANIC',
                subStandardId: 'KOREA'
            },
            {
                subStandardName: 'INPUT',
                subStandardId: 'INPUT'
            }
        ]
    },
    {
        standardName: 'Global GAP',
        standardValue: 'globalgap',
        subStandards: []
    }
];

export const initialDocDatas = {
    [datasParts.typePart.key]: [],
    [datasParts.clientPart.key]: [],
    [datasParts.scopePart.key]: [],
    [datasParts.feePart.key]: []
};

export const initialTypeDatas = {
    contractNum: '',
    date: '',
    aPRNum: '',
    standard: standardList[0].standardValue,
    subStandards: []
};

export const initialClientDatas = {
    companyNameVi: '',
    companyNameEn: '',
    companyAddressVi: '',
    companyAddressEn: '',
    taxCode: '',
    phoneNum: '',
    representativeName: '',
    pronouns: 'Mr.',
    jobTitle: ''
};
