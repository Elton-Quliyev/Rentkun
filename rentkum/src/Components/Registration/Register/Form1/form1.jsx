import { useState } from "react";
import "./form_1.css";
import { NavLink } from "react-router-dom";
import Validate from "../../../../Helpers/Validate";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../../../Redux/Features/userRegister";
import { FaAngleDoubleLeft } from "react-icons/fa";

const FormTwo = () => {

  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    numberPrefix: "",
    phoneNumber: "",
    gender: "",
    cityAndZipCode: "",
    location: "",
    birthDate: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    numberPrefix: "",
    phoneNumber: "",
    gender: "",
    cityAndZipCode: "",
    location: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({
        ...formData,
        [name]: value
    });

    const error = Validate(name, value, formData); 

    setErrors({
        ...errors,
        [name]: error
    });
};


  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    Object.keys(formData).forEach((key) => {
        const error = Validate(key, formData[key], formData);
        if (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [key]: error
            }));
            hasError = true;
        }
    });

    if (!hasError) {
        console.log(formData);
        dispatch(signUpUser(formData))
    } else {
        console.log("Please fill out the form correctly");
    }
};


  return (
    <section className="section-form">
      <div className="container-form">
        <div className="header-form">
          <div className="header-form_btns">
            <NavLink to="/login" className="btn-login">
              Log in
            </NavLink>
            <NavLink to="/registration" className="btn-register">
              Register
            </NavLink>
          </div>

          <NavLink to='/'>
            <FaAngleDoubleLeft className="btn-out"/>
          </NavLink>

        </div>
        <div className="header-form">
          <h2>Personal information</h2>
        </div>

        <form className="form-inp" onSubmit={handleSubmit}>
          <div className="form-right_left">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          <div className="number">
            <select
              name="numberPrefix"
              onChange={handleChange}
              value={formData.numberPrefix}
            >
              <option value="">0XX</option>
              <option value="050">050</option>
              <option value="051">051</option>
              <option value="099">099</option>
              <option value="070">070</option>
              <option value="077">077</option>
              <option value="010">010</option>
              <option value="055">055</option>
            </select>
            {errors.numberPrefix && <span className="error-message">{errors.numberPrefix}</span>}


            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
          </div>

          <input
            className="birthday"
            type="date"
            name="birthDate"
            placeholder="Birthday"
            onChange={handleChange}
          />
          {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}

          <input
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}

          <div className="form-right_left">
            <select name="gender" onChange={handleChange}>
              <option value="">Gender</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
            {errors.gender && <span className="error-message">{errors.gender}</span>}


            <input
              type="text"
              placeholder="Zip code"
              name="cityAndZipCode"
              onChange={handleChange}
            />
            {errors.cityAndZipCode && <span className="error-message">{errors.cityAndZipCode}</span>}
          </div>

          <textarea
            className="form-location"
            placeholder="Location"
            name="location"
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
          {errors.location && <span className="error-message">{errors.location}</span>}

          <span className="spn">
            Let us know about your birthday so as not to miss a gift
          </span>

          <button className="form-btn" type="submit">
            Save information
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormTwo;
