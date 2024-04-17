import React from 'react'

export default function PasswordChange() {
  return (
    <div className='container'>
      <h2 className='container-title'>Change Password</h2>

      <form className='profilesettings' >
        <div className="profileSettings-contact">
            <h4 className='inp-text'>Old Password</h4>
            <input className='inp' placeholder='Enter old password' type="text" />
          </div>
          <div className="profileSettings-contact">
            <h4 className='inp-text'>New Password</h4>
            <input className='inp'placeholder='Enter new password' type="text" />
          </div>

        <div className='profileSettings-btns'>
          <button className='profileSettings-btns_cancel'>Cancel</button>
          <button className='profileSettings-btns_save'>Save </button>
        </div>
      </form>
    </div>
  )
}
