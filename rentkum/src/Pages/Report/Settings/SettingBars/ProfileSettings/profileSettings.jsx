import './profileSettings.scss'
import User_photo from '../../../../../assets/headerPhoto/userPhotp.jpg'

export default function ProfileSettings() {
  return (
    <div className="container">
      <h2 className='container-title'>Profile Settings</h2>

      <div className="container-user">
        <img 
          className='container-user_photo'
          src={User_photo} 
          alt="userPhoto" />
      </div>

      <form className="profileSettings">
        <div className="profileSettings_left-right">
          <div className="profileSettings_left-right__left">
            <h4 className='inp-text'>First Name</h4>
            <input className='inp' placeholder='Enter your first name' type="text" />
          </div>
          <div className="profileSettings_left-right__right">
            <h4 className='inp-text'>Last Name</h4>
            <input className='inp' placeholder='Enter your last name' type="text" />
          </div>
        </div>

        <div className="profileSettings-contact">
          <h4 className='inp-text'>Phone Number</h4>
          <input className='inp' placeholder='Enter your phone number' type="text" />
        </div>
        <div className="profileSettings-contact">
          <h4 className='inp-text'>Email Address</h4>
          <input className='inp'placeholder='Enter your email address' type="text" />
        </div>

        <div className="profileSettings_left-right">
          <div className="profileSettings_left-right__left">
            <h4 className='inp-text'>Gender</h4>
            <select className='select'>
              <option className='select-option'>Select Gender</option>
              <option className='select-option'>Man</option>
              <option className='select-option'>Woman</option>
              <option className='select-option'>I don't want to mention</option>
            </select>
          </div>
          <div className="profileSettings_left-right__right">
            <h4 className='inp-text'>City & Zip Code</h4>
            <input className='inp' placeholder='City and zip cod' type="text" />
          </div>
        </div>

        <div className="profileSettings-location">
          <h4 className='inp-text'>Location</h4>
          <textarea className='profileSettings-location_textarea' placeholder='Enter you locaction' name="" id="" cols="50" rows="10"></textarea>
        </div>

        <div className='profileSettings-btns'>
          <button className='profileSettings-btns_cancel'>Cancel</button>
          <button className='profileSettings-btns_save'>Save</button>
        </div>

      </form>
    </div>
  )
}
