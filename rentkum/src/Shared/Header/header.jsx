import React from 'react'
import './header.scss'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/headerPhoto/Logo.png'
import Dashboard from '../../assets/headerIcons/dashboard.svg'
import Discover from '../../assets/headerIcons/discover.svg'
import Calendar from '../../assets/headerIcons/calendar.svg'
import Save from '../../assets/headerIcons/save.svg'
import inbox from '../../assets/headerIcons/inbox.svg'
import Transactions from '../../assets/headerIcons/transactions.svg'
import CarReports from '../../assets/headerIcons/carReports.svg'
import Setting from '../../assets/headerIcons/setting.svg'
import Logout from '../../assets/headerIcons/logout.svg'
import ShoppingIcon from '../../assets/headerIcons/shopping-cart.svg'


export default function Header() {
  return (
    <header className='header'>
       <div className="tittle">
            <img 
                src={Logo} 
                alt="web site logo" 
                className="tittle-logo" />
            <h2 className='tittle-name'>Rentkum</h2>
       </div>

       <div className='sidebar'>

            <h2 className='half-bass'>ABOUT CAR</h2>

            <ul className='sidebar-list'>
                <Link className='sidebar-list_item'  to='/'>
                  <img style={{opacity: '0.4'}} className='sidebar-list_item-icon' src={Dashboard} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Dashboard</span>
                </Link>
                <Link className='sidebar-list_item'  to='/discover'>
                  <img className='sidebar-list_item-icon' src={Discover} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Discover</span>
                </Link>
                <Link className='sidebar-list_item'  to='/calendar'>
                  <img className='sidebar-list_item-icon' src={Calendar} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Calendar</span>
                </Link>
                <Link className='sidebar-list_item'  to='/saved'>
                  <img className='sidebar-list_item-icon' src={Save} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Saved</span>
                </Link>
                <Link className='sidebar-list_item'  to='/inbox'>
                  <img className='sidebar-list_item-icon' src={inbox} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Inbox</span>
                </Link>

            </ul>

            <hr className='line' />
            <h2 className='half-bass'>REPORT</h2>

            <ul className='sidebar-list'>
                <Link className='sidebar-list_item'  to='/transactions'>
                  <img className='sidebar-list_item-icon' src={Transactions} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Transactions</span>
                </Link>
                <Link className='sidebar-list_item'  to='/carReports'>
                  <img className='sidebar-list_item-icon' src={CarReports} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Car Reports</span>
                </Link>
            </ul>

            <div className='shopping'>
              <div className='shopping-card'>
                <img className='shopping-card_icon' src={ShoppingIcon} alt="shopping-icon" />
              </div>
              <span className='shopping-text'>We connect you with thousands of potential buyers in your area.</span>
              <button className='shopping-btn'>Sell Your Car</button>
            </div>

            <ul className='sidebar-list'>
                <Link className='sidebar-list_item'  to='/settings'>
                  <img className='sidebar-list_item-icon' src={Setting} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Settings</span>
                </Link>
                <Link style={{color: 'red'}} className='sidebar-list_item '  to='/logOut'>
                  <img className='sidebar-list_item-icon' src={Logout} alt="dashboard" />
                  <span className='sidebar-list_item-name'>Log Out</span></Link>
            </ul>
       </div>
    </header>
  )
}
