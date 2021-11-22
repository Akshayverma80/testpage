const validationRules = [
    {
        field: 'first_name',
        validations: ['required','alpha'],
        name: 'First name'
    },
    {
        field: 'last_name',
        validations: ['required'],
        name: 'Last name'
    },
    {
        field: 'organisation',
        validations: ['required'],
        name: 'Organization name'
    },
    {
        field: 'expDate',
        validations: ['required'],
        name: 'Expiry date'
    },
    {
        field: 'cerDate',
        validations: ['required'],
        name: 'Certified date'
    },
    {
        field: 'name',
        validations: ['required','alpha'],
        name: 'Issuer name'
    },
    {
        field: 'mobileNo',
        validations: ['required','numeric','digit'],
        name: 'Mobile number'
    },
    {
        field: 'description',
        validations: ['required'],
        name: 'Description'
    },
    {
        field: 'criteria',
        validations: ['required'],
        name: 'Criteria'
    },
    {
        field: 'skill',
        validations: ['required'],
        name: 'Skills'
    },
    {
        field: 'issuer',
        validations: ['required'],
        name: 'Issuer'
    },
    {
        field: 'badgegraphic',
        validations: ['required'],
        name: 'Badge graphic'
    },
    {
        field: 'recipientname',
        validations: ['required'],
        name: 'Recipient name'
    },
    {
        field: 'recipientid',
        validations: ['required'],
        name: 'Recipient Id'
    },
    {
        field: 'badgename',
        validations: ['required'],
        name: 'Badge name'
    },
    {
        field: 'email',
        validations: ['required', 'email'],
        name: 'Email'
    },
    {
        field: 'password',
        validations: ['required', 'password'],
        name: 'Password'
    },
    {
        field: 'new_password',
        validations: ['required', 'password'],
        name: 'New password'
    },
    {
        field: 'confirm_password',
        validations: ['required','confirm'],
        name: 'Confirm password'
    },
];
export default validationRules;