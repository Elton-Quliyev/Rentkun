import React from 'react'
import MediumHeader from '../../../Shared/MediumHeader/mediumHeader'
import calendar from '../../../assets/headerPhoto/calendar.png'

export default function Calendar() {
  return (
    <div>
      <MediumHeader tittle='Calendar'/>

      <img className='menu-list' src={calendar} alt="calendar" />
    </div>
  )
}
