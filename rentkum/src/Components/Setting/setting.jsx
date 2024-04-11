// setting.jsx

import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './setting.scss';
import { FaChevronRight } from 'react-icons/fa';
import { CiUser, CiMail, CiWallet } from 'react-icons/ci';
import { IoLockClosedOutline } from 'react-icons/io5';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { GoShieldCheck } from 'react-icons/go';
import { TbMessageQuestion } from 'react-icons/tb';
import LittleHeader from '../../Shared/Header/LittleHeader/littleHeader';


export default function Setting() {
  const settingItems = [
    {
      name: 'Profile Settings',
      path: '/profile',
      icon: <CiUser className='settings-list_item-icon' />,
    },
    {
      name: 'Change Password',
      path: '/passwordChange',
      icon: <IoLockClosedOutline className='settings-list_item-icon' />,
    },
    {
      name: 'Change Email & Phone Number',
      path: '/emailChange',
      icon: <CiMail className='settings-list_item-icon' />,
    },
    {
      name: 'Notifications Settings',
      path: '/notifications',
      icon: <IoIosNotificationsOutline className='settings-list_item-icon' />,
    },
    {
      name: 'Payment Method',
      path: '/payment',
      icon: <CiWallet className='settings-list_item-icon' />,
    },
    {
      name: 'Privacy and Security',
      path: '/security',
      icon: <GoShieldCheck className='settings-list_item-icon' />,
    },
    {
      name: 'Help',
      path: '/help',
      icon: <TbMessageQuestion className='settings-list_item-icon' />,
    },
  ];

  return (
    <div className='rent-set'>
      <div className='settings'>
        <div className='settings-tittle'>Settings</div>
        <ul className='settings-list'>
          {settingItems.map((item, index) => (
            <div key={index}>
              <NavLink
                className='settings-list_item'
                activeClassName='active'
                to={`/settings${item.path}`} 
              >
                <div className='settings-list_item-little'>
                  {item.icon}
                  <span className='settings-list_item-name'>{item.name}</span>
                </div>
                <FaChevronRight className='settings-list_item-right' />
              </NavLink>
            </div>
          ))}

        </ul>
        
      </div>
          <div>
            <LittleHeader/>
            <Outlet/>
          </div>
    </div>
  );
}
