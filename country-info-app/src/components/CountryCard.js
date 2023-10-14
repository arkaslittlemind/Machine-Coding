import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags[0]} alt={`${country.name} flag`} />
      <h3>{country.name}</h3>
      <p>Area: {country.area} km²</p>
      <p>Continent: {country.continents.join(', ')}</p>
      <p>Currency: {country.currencies.join(', ')}</p>
      <p>Languages: {country.languages.join(', ')}</p>
    </div>
  );
}

export default CountryCard;
