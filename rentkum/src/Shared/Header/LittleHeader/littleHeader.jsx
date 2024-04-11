import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import User_photo from '../../../assets/headerPhoto/userPhotp.jpg'
import './littleHeader.scss'

export default function LittleHeader() {
  return (
    <header className='littleHeader'>

        <div></div>

        <div className='littleHeader-container'>
            <div className='littleHeader-container_icons'>
                <IoIosNotificationsOutline className='littleHeader-container_icons_icon'/>
            </div>
            <div className='littleHeader-container_photos'>
                <img className='littleHeader-container_photos_img' src={User_photo} alt="user_photo" />
            </div>
        </div>
      
    </header>
  )
}
