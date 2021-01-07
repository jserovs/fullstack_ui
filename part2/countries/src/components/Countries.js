import React from 'react';
import Country from './Country';
import CountryDetails from './CountryDetails';

const Countries = ({ countries, filter, setFilter }) => {

    let toShow

    if (filter === "") {
        toShow = [...countries]
    } else {
        toShow = countries.filter(country => country.name.includes(filter));

        let showNumber =Object.keys(toShow).length;
        console.log (showNumber)

        if (showNumber > 10) {
            return (
                <div>More than 10 results</div>
            )
        }
        if (showNumber > 1 && showNumber <=10) {
            
            return (
                toShow.map(country => {
                    return (
                        <div key={country.name}>
                            <Country key={country.name} country={country} />
                            <button onClick={() => setFilter(country.name)}>Say Hello</button>
                            {/* <Button text="show details" onClick={() => alert("Hello" + country.name)}/> */}
                        </div>)
                })
            )
        }        
        if (Object.keys(toShow).length === 1) {

            return (
                toShow.map(() => {
                    return (
                        toShow.map(country => 
                            <div>
                                <Country key={country.name} country={country}/>
                                <CountryDetails key={country.name} country={country}/>
                            </div>
                            )
                    )
                })
            )
        }
    }

    return (
        toShow.map(country => {
            return (
                <div key={country.name}>
                    <Country key={country.name} country={country} />
                </div>)
        })
    )
}

export default Countries