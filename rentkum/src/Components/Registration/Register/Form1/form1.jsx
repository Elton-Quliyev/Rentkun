import { useState } from "react";
import "./form_1.css";
import Validate from "../../../../Helpers/Validate";
import { NavLink } from "react-router-dom";


const FormTwo = () => {
  const [formData2, setFormData2] = useState({
    name: "",
    gender: "",
    numberPrefix: "+994",
    phoneNumber: "",
    date: ""
  });

  const [errors2, setErrors2] = useState({
    name: "",
    gender: "",
    phoneNumber: "",
    date: ""
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData2({
      ...formData2,
      [name]: value
    });

    let error= Validate(name,value)

    setErrors2({
        ...errors2,
        [name]:error
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData2.name.length > 0 &&
      formData2.gender.length > 0 &&
      formData2.phoneNumber.length > 0 &&
      formData2.date.length > 0
    ) {
      console.log(formData2);
    } else {
      console.log("Formu tam doldurun");
    }
  };

  return (

    <>
    
    <section>
      <div className="container-form">
              <div className="header-form"> 
                <NavLink to='/login' className="btn-login">Log in</NavLink>
                <NavLink to='/registration' className="btn-register">Register</NavLink>
              </div>
        <div className="header-form">
          <h2>Personal information</h2>
        </div>

        <form className="form-inp" onSubmit={handleSubmit}>
          <div className="form-right_left">
            <input
              type="text"
              name="name"
              placeholder="First name"
              onChange={handleChange}
              />
            {errors2.name && <span className="error-message">{errors2.name}</span>}

            <input
              type="text"
              name="name"
              placeholder="Last name"
              onChange={handleChange}
              />
            {errors2.name && <span className="error-message">{errors2.name}</span>}

          </div>

          <div className="number">
            <select
              name="numberPrefix"
              onChange={handleChange}
              value={formData2.numberPrefix}
              >
              <option value="+994">+994</option>
              <option value="+777">+777</option>
              <option value="+0551">+0551</option>
            </select>

            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={handleChange}
              />
          {errors2.phoneNumber && <span className="error-message">{errors2.phoneNumber}</span>}

          </div>
          <input
            className="birthday"
            type="date"
            name="date"
            placeholder="birthday"
            onChange={handleChange}
            />
          {errors2.date && <span className="error-message">{errors2.date}</span>}
          
          <input 
            type="text"
            placeholder="E-mail"
            name="email"
          />

          <input 
            type="password"
            placeholder="Password"
            name="password"
          />

          <input 
            type="password"
            placeholder="Password confirm"
            name="password"
          />

          <div className="form-right_left">
            
            <select name="gender" id="gender">
              <option value="">Gender</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>

            <input 
              type="number"
              placeholder="Zip code" />
          </div>

          <textarea className="form-location" placeholder="Location" name="location" id="location" cols="30" rows="10"></textarea>





          



          <span className="spn">
            Let us know about your birthday so as not to miss a gift
          </span>

          <button className="form-btn" type="submit">
            Save information
          </button>
        </form>
      </div>
    </section>


    </>
  );
};

export default FormTwo;
