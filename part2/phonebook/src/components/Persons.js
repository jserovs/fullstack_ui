import React from 'react'
import Person from './Person'

const Persons = ({persons, filter}) => {

    let toShow

    if (filter === "") {
        toShow = [...persons]
    } else {
        toShow = persons.filter(person => person.name.includes(filter))
    }
    

    return (
        toShow.map(person => <Person key={person.name} person={person} />)
    )
}

export default Persons