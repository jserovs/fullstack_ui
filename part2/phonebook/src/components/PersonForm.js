import React, { useState } from 'react'
import Button from './Button'

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
            copy.push({ name: newName, number: newPhone })
            setPersons(copy)
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