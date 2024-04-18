import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/headerPhoto/Logo.png';
import { RxDashboard,RxCalendar } from "react-icons/rx";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { HiSaveAs } from "react-icons/hi";
import { TbMessage2, TbReport } from "react-icons/tb";
import { IoReceiptOutline, IoSettingsOutline} from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import ShoppingIcon from '../../../assets/headerIcons/shopping-cart.svg';

export default function Header() {

  const menuItem = [
    {
      name:"Dashboard",
      path:"/",
      icon: <RxDashboard className='sidebar-list_item-icon'/>
    },
    {
      name:"Discover",
      path:"/discover",
      icon: <RiCompassDiscoverLine className='sidebar-list_item-icon'/>
    },
    {
      name:"Calendar",
      path:"/calendar",
      icon: <RxCalendar className='sidebar-list_item-icon'/>
    },
    {
      name:"Saved",
      path:"/saved",
      icon: <HiSaveAs className='sidebar-list_item-icon'/>
    },
    {
      name:"Inbox",
      path:"/inbox",
      icon: <TbMessage2 className='sidebar-list_item-icon'/>
    },
    {
      name:"Transactions",
      path:"/transactions",
      icon:<IoReceiptOutline className='sidebar-list_item-icon'/>
    },
    {
      name:"Car Reports",
      path:"/carReports",
      icon:<TbReport className='sidebar-list_item-icon'/>
    },
    {
      name:"Settings",
      path:"/settings",
      icon:<IoSettingsOutline className='sidebar-list_item-icon'/>
    },
    {
      name:"Log Out",
      path:"/logOut",
      icon:<CiLogout className='sidebar-list_item-icon'/>
    },
  ]

  return (
    <header className='header'>
      <NavLink to='/' className="header-tittle">
        <img
          src={Logo}
          alt="web site logo"
          className="header-tittle-logo" />
        <h2 className='header-tittle-name'>Rentkum</h2>
      </NavLink>

      <div className='sidebar'>

        <h2 className='half-bass'>ABOUT CAR</h2>

        <ul className='sidebar-list'>

          {menuItem.map((item, index) => (
            <div key={index}>
              <NavLink className='sidebar-list_item' activeClassName='active' to={item.path} >
                {item.icon}
                <span className='sidebar-list_item-name'>{item.name}</span>
              </NavLink>
              {index === 4 && (
                <div>
                  <hr className='line' />
                  <h2 className='half-bass'>REPORT</h2>
                </div>
              )}
              {index === 6 && (
                <div className='shopping'>
                  <div className='shopping-card'>
                    <img className='shopping-card_icon' src={ShoppingIcon} alt="shopping-icon" />
                  </div>
                    <span className='shopping-text'>We connect you with thousands of potential buyers in your area.</span>
                    <button className='shopping-btn'>Sell Your Car</button>
                </div>
              )}
            </div>
          ))}
        </ul>


      </div>
    </header>
  )
}
