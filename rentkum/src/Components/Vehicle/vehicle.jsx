import React, { useState } from 'react';
import './vehicle.css';
import addPhoto from '../../assets/headerPhoto/addPhoto.png';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import SetResultsList from './SearchVehicle/setResultsList';

export default function Vehicle() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const [formData, setFormData] = useState({
    vehicleBrand: '',
    vehicleModel: '',
    vehicleType: '',
    vehicleYear: '',
    description: '',
    selectedPhotos: [],
  });

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });

        setResults(results);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'vehicleBrand') {
      setInput(value);
      fetchData(value);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedPhotos: [...prevFormData.selectedPhotos, ...files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSelect = (name) => {
    setInput(name);
    setFormData((prevFormData) => ({
      ...prevFormData,
      vehicleBrand: name,
    }));
    setResults([]);
  };

  return (
    <div className='vehicle-section'>
      <div className='vehicle-container'>
        <div className="vehicle-header">
          <h1 className='vehicle-header_title'>Create a New Car Listing</h1>
          <span className='vehicle-header_text'>Provide basic information about your car</span>

          <NavLink className='vehicle-header_out' to='/'>
            <FaAngleDoubleLeft className="btn-out" />
          </NavLink>
        </div>

        <form className='vehicle-form' onSubmit={handleSubmit}>
          <div className="vehicle-form_child">
            <label htmlFor="vehicleBrand" className="vehicle-form_child-text">Vehicle Brand</label>
            <input
              type="text"
              name="vehicleBrand"
              placeholder='Vehicle brand type...'
              value={formData.vehicleBrand}
              onChange={handleChange}
            />
            {input && <SetResultsList results={results} onSelect={handleSelect} />}
          </div>

          <div className="vehicle-form_child">
            <label htmlFor="vehicleModel" className="vehicle-form_child-text">Vehicle Model</label>
            <select
              className='vehicle-form_child-select'
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
            >
              <option value="">Select vehicle model...</option>
              <option value="mustang">Mustang</option>
              <option value="focus">Focus</option>
              <option value="transit">Transit</option>
            </select>
          </div>

          <div className="vehicle-form_child">
            <label htmlFor="vehicleType" className="vehicle-form_child-text">Vehicle Type</label>
            <select
              className='vehicle-form_child-select'
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value="">Select vehicle type...</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
            </select>
          </div>

          <div className="vehicle-form_child">
            <label htmlFor="vehicleYear" className="vehicle-form_child-text">Vehicle Year</label>
            <select
              className='vehicle-form_child-select'
              name="vehicleYear"
              value={formData.vehicleYear}
              onChange={handleChange}
            >
              <option value="">Select vehicle year...</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <div className="vehicle-form_child">
            <label htmlFor="description" className="vehicle-form_child-text">Description</label>
            <textarea
              className='vehicle-form_child-description'
              name="description"
              cols="30"
              rows="10"
              value={formData.description}
              onChange={handleChange}
              placeholder='Enter description...'
            ></textarea>
          </div>

          <div className="add-photo-container">
            <div className="vehicle-form_photos">
              <img src={addPhoto} alt="vehicle photo" className="vehicle-form_photos-image" />
              <div className='vehicle-form_photos-line'>
                <hr className='vehicle-form_photos-line_hr' />
                or
                <hr className='vehicle-form_photos-line_hr' />
              </div>
              <input type="file" onChange={handleFileChange} className='vehicle-form_photos-btn' multiple accept="image/*" />
              <span className='vehicle-form_photos-text'>Maximum file size is 128 MB</span>
              <div className="selected-photos-container">
                {formData.selectedPhotos.map((photo, index) => (
                  <img key={index} src={URL.createObjectURL(photo)} alt={`selected photo ${index}`} className="selected-photo" />
                ))}
              </div>
            </div>
          </div>

          <button className='vehicle-form_btn' type="submit">Add Vehicle</button>
        </form>
      </div>
    </div>
  );
}
