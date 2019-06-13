import React from 'react'
import Person from './Person'
import personsService from '../services/persons'

const Persons = ({ persons, setPersons, filter, setApplyMessage }) => {

    let toShow

    if (filter === "") {
        toShow = [...persons]
    } else {
        toShow = persons.filter(person => person.name.includes(filter))
    }

    const removePerson = (person) => {
        if (window.confirm(`${person.name} is about to be deleted. Continue?`)) {
            personsService.remove(person.id, () => {
                setApplyMessage({message: `${person.name} already deleted`, style: "error"});
                setTimeout(() => {
                    setApplyMessage({message: null, style: null})
                }, 5000)
            })
            const copy = [...persons]
            copy.splice(copy.indexOf(person), 1)
            setPersons(copy)
        }
    }

    return (
        toShow.map(person => <Person key={person.id} person={person} removePerson={() => removePerson(person)} />)
    )

}



export default Persons