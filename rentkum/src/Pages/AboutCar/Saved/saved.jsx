import React from 'react'
import MediumHeader from '../../../Shared/MediumHeader/mediumHeader'
import saved from '../../../assets/headerPhoto/saveds.png'
export default function Saved() {
  return (
    <div>
      <MediumHeader tittle='Saved'/>

      <img className='menu-list' src={saved} alt="saved" />

    </div>
  )
}
