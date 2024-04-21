import {  useState } from "react";
import "./form1.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { logInUser, logout } from "../../../../Redux/Features/userRegister";




function FormOne() {

    const dispatch = useDispatch()
    
    
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        const error = validateInput(name, value); 
        
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        
        setErrors({
            ...errors,
            [name]: error
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let hasError = false;
        
        Object.keys(formData).forEach((key) => {
            const error = validateInput(key, formData[key]);
            if (error) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [key]: error
                }));
                hasError = true;
            }
        });

        if (!hasError) {
            console.log(formData);
            dispatch(logInUser(formData))

        } else {
            console.log("Formu tam doldurun");
        }
    };

    const logOutHandle = () =>{
        dispatch(logout)
    }
    
    const validateInput = (name, value) => {
        switch (name) {
            case 'email':
                if (!value || !/\S+@\S+\.\S+/.test(value)) {
                    return 'Geçerli bir e-posta adresi girin';
                }
                return '';
                case 'password':
                    if (!value || value.length < 8) {
                        return 'Şifreniz en az 8 karakter olmalıdır';
                    }
                    return '';
                    default:
                        return '';
                    }
                };
                return (
                    <section className="section">
            <div className="container-form">
                <div className="header-form"> 
                    <NavLink activeClassName="active" to='/login' className="btn-login">Log in</NavLink>
                    <NavLink activeClassName="active" to='/registration' className="btn-register">Register</NavLink>
                </div>
                <div className="form-icons">
                    <div className="form-icons_div">
                        <FaFacebookF className="form-icons_div-icon"/>
                    </div>
                    <div className="form-icons_div">
                        <FcGoogle className="form-icons_div-icon"/>
                    </div>
                    <div className="form-icons_div">
                        <FaTwitter className="form-icons_div-icon"/>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inpts">
                        <input type="email" name="email" placeholder="Email adress" onChange={handleChange}/>
                        {errors.email && <span>{errors.email}</span>}
                        <input type="password" name="password" placeholder=" Password" onChange={handleChange}/>
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <button className="form-btn" type="submit">Create accound</button>
                    <button onClick={logOutHandle}>logout</button>
                   
                </form>
                <span className="end">By continuing I agree with the <a href="#">Terms & Conditions, Privacy Policy</a></span>
            </div>
        </section>
    );
}

export default FormOne;
