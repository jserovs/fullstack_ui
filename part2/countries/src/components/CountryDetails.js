import React from 'react'

const CountryDetails = ({country}) => {

    // <p>Languages: {country.languages}</p>
    let languages = country.languages;
    console.log(country);


    return (
        <div>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Flag:</p>
        <img src={country.flag} width="100"/>
        <p>Languages: {languages.map((value, index) => {
            return <li key={index}>{value.name}</li>
        })}</p>
        </div>
    )
}

export default CountryDetails