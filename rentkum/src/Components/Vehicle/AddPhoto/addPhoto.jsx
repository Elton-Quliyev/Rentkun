import React, { useState } from 'react';
import addPhoto from  '../../../assets/headerPhoto/addPhoto.png';
import './addPhoto.scss';

export default function AddPhoto() {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedPhotos(files);
  };

  return (
    <div className="add-photo-container">
      <div className="vehicle-form_photos">
        <img src={addPhoto} alt="vehicle photo" className="vehicle-form_photos-image" />
        <div className='vehicle-form_photos-line'>
          <hr className='vehicle-form_photos-line_hr' />
          or
          <hr className='vehicle-form_photos-line_hr' />
        </div>
        <input type="file" onChange={handleFileChange} className='vehicle-form_photos-btn' multiple accept="image/*" />
        <span className='vehicle-form_photos-text'>Maximum file size is 128 Mb</span>
      </div>
      <div className="selected-photos-container">
        {selectedPhotos.map((photo, index) => (
          <img key={index} src={URL.createObjectURL(photo)} alt={`selected photo ${index}`} className="selected-photo" />
        ))}
      </div>
      <button onClick={() => console.log(selectedPhotos)}>Seçilen Dosyaları Göster</button>
    </div>
  );
}
