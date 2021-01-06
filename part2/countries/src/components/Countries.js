import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({ countries, filter }) => {

    let toShow

    if (filter === "") {
        toShow = [...countries]
    } else {
        toShow = countries.filter(country => country.name.includes(filter));
        if (Object.keys(toShow).length > 10) {
            return (
                <div>More than 10 results</div>
            )
        }
        if (Object.keys(toShow).length === 1) {
            console.log(toShow);
            return (
                toShow.map(country => <CountryDetails key={country.name} country={country} />)
            )
        }

    }

    return (
        toShow.map(country => <Country key={country.name} country={country} />)
    )
}

export default Countries