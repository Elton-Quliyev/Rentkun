const Validate = (name, value, formData) => {
    let error = '';

    switch (name) {
        case 'email':
            let emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
            if (!emailRegex.test(value)) {
                error = 'Please enter a valid email address';
            }
            break;

        case 'password':
            if (value.length < 8) {
                error = 'Password should be at least 8 characters long';
            }
            break;

        case 'confirmPassword':
            if (value !== formData.password) {
                error = 'Passwords do not match';
            }
            break;

        case 'gender':
            const genderRegex = /^(man|woman)$/i;
            if (!genderRegex.test(value)) {
                error = 'Please select a gender';
            }
            break;

        case 'numberPrefix':
            const numberPrefixRegex = /^0\d{2}$/;
            if (!numberPrefixRegex.test(value)) {
                error = 'Please select a numberPrefix';
            }
            break;

        case 'phoneNumber':
            let phoneNumberRegex = /^\d{7}$/;
            if (!phoneNumberRegex.test(value)) {
                error = 'Please enter a valid phone number (7 digits)';
            }
            break;

        case 'birthDate':
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if(!dateRegex.test(value)){
                error = 'Please enter a valid birthday ';
            }
            break;

        case 'firstName':
        case 'lastName':
            if (value.length<3) {
                error = 'Please enter your name';
            }
            break;

        case 'location':
            const locationRegex = /^[\w\s.,-]+$/;
            if (!locationRegex.test(value)) {
                error = 'Please enter a valid location (e.g., City, Country)';
            }
            break;

        case 'cityAndZipCode':
            const cityAndZipCodeRegex = /^[\w\s.,-]+$/;
            if (!cityAndZipCodeRegex.test(value)) {
                error = 'Please enter a valid city and zip code';
            }
            break;

        default:
            break;
    }

    return error;
}

export default Validate;
