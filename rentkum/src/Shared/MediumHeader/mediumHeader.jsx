import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import User_photo from '../../assets/headerPhoto/userPhotp.jpg'
import './mediumHeader.scss'
import { NavLink } from 'react-router-dom';

export default function MediumHeader({tittle}) {
  return (
    <header className='mediumHeader'>

        <h2 className='mediumHeader-tittle'>{tittle}</h2>

        <div className='mediumHeader-container'>

            <div className="mediumHeader-container_btns">
                <NavLink className="mediumHeader-container_btns-signin" to='/registration'>Sign up</NavLink>
                <NavLink className="mediumHeader-container_btns-login" to='/login'>Log in</NavLink>

            </div>
            <div className='mediumHeader-container_icons'>
                <IoIosNotificationsOutline className='mediumHeader-container_icons_icon'/>
            </div>
            <div className='mediumHeader-container_photos'>
                <img className='mediumHeader-container_photos_img' src={User_photo} alt="user_photo" />
            </div>
        </div>
      
    </header>
  )
}
