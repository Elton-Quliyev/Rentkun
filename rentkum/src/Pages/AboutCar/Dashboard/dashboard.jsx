import React from 'react'
import MediumHeader from '../../../Shared/MediumHeader/mediumHeader'
import dashboard from '../../../assets/headerPhoto/dashboard2.png'

export default function Dashboard() {
  return (
    <div>
      <MediumHeader tittle='Dashboard'/>

      <img className='menu-list' src={dashboard} alt="dashboard" />
    </div>
  )
}
