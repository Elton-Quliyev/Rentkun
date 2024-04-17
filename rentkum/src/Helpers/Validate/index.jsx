const Validate = (name, value) =>{
    let error = '';

    switch (name) {
        case 'email':
            let EmailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
            if(!EmailRegex.test(value)){
                error='Emailinizi düzgün formatta giriniz'
            }
            break;

        case 'password':
            let PasswordRegex = new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$');
            if(!PasswordRegex.test(value)){
                error = 'Parolanızı düzgün formatta giriniz (en az 8 karakter, en az bir harf ve bir rakam içermelidir)'
            }
            break;

        case 'gender':
            if(value.length < 2){
                error='Bir cinsiyet seçmelisiniz'
            }
            break;

        case 'phoneNumber':
            let PhoneNumberRegex = /^\d{9}$/;
            if(!PhoneNumberRegex.test(value)){
                error='Telefon numaranızı düzgün formatta giriniz (9 rakam olmalıdır)'
            }
            break;

        case 'date':
            if(value.length < 2){
                error ='Doğum tarihinizi düzgün formatta giriniz'
            }
            break;

        case 'name':
            if(value.length < 3){
                error = 'Adınızı düzgün formatta giriniz (en az 3 karakter)'
            }
            break;
    
        default:
            break;
    }

    return error
}

export default Validate;
