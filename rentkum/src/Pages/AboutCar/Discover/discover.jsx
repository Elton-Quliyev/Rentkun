import React from 'react'
import MediumHeader from '../../../Shared/MediumHeader/mediumHeader'
import discover from '../../../assets/headerPhoto/discovery2.png'
import './menu.scss'

export default function Discover() {
  return (
    <div>
      

      <MediumHeader tittle='Discover'/>

      <img className='menu-list' src={discover} alt="car-lists" />


    </div>
  )
}
