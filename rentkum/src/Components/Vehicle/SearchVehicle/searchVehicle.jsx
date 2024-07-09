import React from 'react';
import './setResultList.css';


export default function SearchVehicle({ result, onSelect }) {
  return (
    <div
      className='results-list_item'
      onClick={() => onSelect(result.name)}
    >
      {result.name}
    </div>
  );
}
