import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/headerPhoto/Logo.png'

export default function Header() {
  return (
    <header>
       <div className="tittle">
            <img 
                src={Logo} 
                alt="web site logo" 
                className="tittle-logo" />
            <h2 className='tittle-name'>Rentkum</h2>
       </div>

       <div className='sidebar'>

            <h2 className='aboutCar'>ABOUT CAR</h2>

            <ul className='sidebar-list'>
                <Link className='sidebar-list_item'  to='/'>Dashboard</Link>
                <Link className='sidebar-list_item'  to='/discover'>Discover</Link>
                <Link className='sidebar-list_item'  to='/calendar'>Calendar</Link>
                <Link className='sidebar-list_item'  to='/saved'>Saved</Link>
                <Link className='sidebar-list_item'  to='/inbox'>Inbox</Link>

            </ul>

            <hr />
            <h2 className='report'>REPORT</h2>

            <ul className='sidebar-list'>
                <Link className='sidebar-list_item'  to='/transactions'>Transactions</Link>
                <Link className='sidebar-list_item'  to='/carReports'>Car Reports</Link>
            </ul>


            <ul className='sidebar-list'>
                <Link className='sidebar-list_item'  to='/settings'>Settings</Link>
                <Link className='sidebar-list_item'  to='/logOut'>Log Out</Link>
            </ul>
       </div>
    </header>
  )
}
