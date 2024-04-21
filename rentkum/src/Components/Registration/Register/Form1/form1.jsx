import { useState } from "react";
import "./form_1.css";
import { NavLink } from "react-router-dom";
import Validate from "../../../../Helpers/Validate";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../../../Redux/Features/userRegister";

const FormTwo = () => {

  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const error = Validate(name, value);

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    Object.keys(formData).forEach((key) => {
      const error = Validate(key, formData[key]);
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
    <section>
      <div className="container-form">
        <div className="header-form">
          <NavLink to="/login" className="btn-login">
            Log in
          </NavLink>
          <NavLink to="/registration" className="btn-register">
            Register
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
            {errors.name && <span className="error-message">{errors.name}</span>}

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
              <option value="+994">+994</option>
              <option value="+777">+777</option>
              <option value="+0551">+0551</option>
            </select>

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
          {errors.date && <span className="error-message">{errors.date}</span>}

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

            <input
              type="text"
              placeholder="Zip code"
              name="cityAndZipCode"
              onChange={handleChange}
            />
            {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
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
