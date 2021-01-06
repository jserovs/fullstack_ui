import React, { useState } from 'react';
import Country from './Country';
import CountryDetails from './CountryDetails';
import Button from './Button';

const Countries = ({ countries, filter }) => {

    let toShow

    const [country, setDetailCountry] = useState('');


    const handleShowCountryDetails= (event) => {
        event.preventDefault();
        console.log("oops");
        return (
            <div>oops</div>
        )
    }

    if (filter === "") {
        toShow = [...countries]
    } else {
        toShow = countries.filter(country => country.name.includes(filter));
        if (Object.keys(toShow).length > 10) {
            return (
                <div>More than 10 results</div>
            )
        }

        if (Object.keys(toShow).length <= 10) {
            return (
                toShow.map(country => {
                    return (
                        <div>
                            <Country key={country.name} country={country} />
                            <Button text="show details" handleClick={handleShowCountryDetails} country={country}/>
                        </div>)
                })
            )
        }

        if (Object.keys(toShow).length === 1) {

            return (
                toShow.map(() => {
                    return (
                        toShow.map(country => <CountryDetails key={country.name} country={country} />)
                    )
                })
            )
        }

    }

    return (
        toShow.map(country => {
            return (
                <div>
                    <Country key={country.name} country={country} />
                </div>)
        })
    )
}

export default Countries