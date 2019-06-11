import React, { useState } from 'react'
import axios from 'axios'
import Button from './Button'
import Axios from 'axios';

const PersonForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')

    const [newPhone, setNewPhone] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const addPerson = (event) => {
        console.log(persons)
        event.preventDefault()
        const copy = [...persons]
        
        if (persons.find(person => person.name === newName) === undefined && persons.find(person => person.phone === newPhone) === undefined) {
            let newPerson = { name: newName, number: newPhone }
            copy.push(newPerson)
            setPersons(copy)

            axios.post('http://localhost:3001/persons', newPerson)
                .then(response => (console.log(response)))
            
        } else {
            window.alert(`${newName} is already added to phonebook`)
        }
    }
    return (
        <form>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                phone: <input value={newPhone} onChange={handlePhoneChange} />
            </div>
            
            <div>
                <Button text='add' handleClick={addPerson} />
            </div>
        </form>
    )
}

export default PersonForm