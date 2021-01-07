import React, { useState } from 'react'
import Button from './Button'
import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons, applyMessage, setApplyMessage }) => {

    const [newName, setNewName] = useState('')

    const [newPhone, setNewPhone] = useState('')



    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const addPerson = (event) => {

        event.preventDefault()
        const copy = [...persons]

        if (persons.find(person => person.name === newName) === undefined
            && persons.find(person => person.phone === newPhone) === undefined) {
            let newPerson = { name: newName, number: newPhone, id: Math.max.apply(Math, copy.map((current)=> current.id )) + 1 }
            copy.push(newPerson)
            setPersons(copy)
            personsService.create(newPerson,
                () => {
                    setApplyMessage({ message: `${newName} was created`, style: "notification" });
                    setTimeout(() => {
                        setApplyMessage({ message: null, style: null })
                    }, 5000)
                })
            setNewName("")
            setNewPhone("")
        } else {
            const edit = copy.filter(pers => { return pers.name === newName })[0]
            if (window.confirm(`${edit.name} will be updated. Continue?`)) {
                copy[copy.indexOf(edit)] = { name: newName, number: newPhone, id: edit.id }
                personsService.update(edit.id, { name: newName, number: newPhone, id: edit.id },
                    () => {
                        setApplyMessage({ message: `${newName} was updated`, style: "notification" });
                        setTimeout(() => {
                            setApplyMessage({ message: null, style: null })
                        }, 5000)
                    }
                )
                setPersons(copy)
            }
        }
    }
    return (
        <div>
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
        </div>
    )
}

export default PersonForm