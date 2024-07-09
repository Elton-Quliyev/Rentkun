import React from 'react';
import './setResultList.css';
import SearchVehicle from './searchVehicle';

export default function SetResultsList({ results, onSelect }) {
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <SearchVehicle result={result} key={id} onSelect={onSelect} />
      ))}
    </div>
  );
}
