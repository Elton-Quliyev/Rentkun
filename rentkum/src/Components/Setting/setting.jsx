
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import './setting.scss'
import { FaChevronRight } from "react-icons/fa";

import { CiUser ,CiMail ,CiWallet} from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { TbMessageQuestion } from "react-icons/tb";

export default function Setting() {

  const [ isOpen , setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const settingİtem = [
    {
      name:"Profile Settings",
      path:"profile",
      icon: <CiUser className='settings-list_item-icon'/>
    },
    {
      name:"Change Password",
      path:"passwordChange",
      icon: <IoLockClosedOutline className='settings-list_item-icon'/>
    },
    {
      name:"Change Email & Phone Number",
      path:"emailChange",
      icon: <CiMail className='settings-list_item-icon'/>
    },
    {
      name:"Notifications Settings",
      path:"notifications",
      icon: <IoIosNotificationsOutline className='settings-list_item-icon'/>
    },
    {
      name:"Payment Method",
      path:"payment",
      icon: <CiWallet className='settings-list_item-icon'/>
    },
    {
      name:"Privacy and Security",
      path:"security",
      icon: <GoShieldCheck className='settings-list_item-icon'/>
    },
    {
      name:"Help",
      path:"help",
      icon: <TbMessageQuestion className='settings-list_item-icon'/>
    }
  ] 
  return (
    <div className='settings'>
      <ul className='settings-list'>

        {settingİtem.map((item, index) => (
          <div  key={index}>
            <NavLink className='settings-list_item' activeClassName='active' to={`/${item.path}`} >
              <div className='settings-list_item-little'>
                {item.icon}
                <span className='settings-list_item-name'>{item.name}</span>
              </div>
              <FaChevronRight className='settings-list_item-right'/>
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
}