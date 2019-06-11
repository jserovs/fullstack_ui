import React, { useState } from 'react'
import axios from 'axios'
import Button from './Button'
import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')

    const [newPhone, setNewPhone] = useState('')

    const [applyMEssage, setApplyMessage] = useState(null)

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const Notification = ({ message }) => {
        if (message === null) {
          return null
        }
      
        return (
          <div className="notification">
            {message}
          </div>
        )
      }

    const addPerson = (event) => {
        console.log(persons)
        event.preventDefault()
        const copy = [...persons]


        if (persons.find(person => person.name === newName) === undefined
            && persons.find(person => person.phone === newPhone) === undefined) {
            let newPerson = { name: newName, number: newPhone, id: copy.length + 1 }
            copy.push(newPerson)
            setPersons(copy)

            axios.post('http://localhost:3001/persons', newPerson)
                .then(response => {
                    console.log(response)
                    setApplyMessage(`${newName} was added` )
                    setTimeout(()=> {
                        setApplyMessage(null)
                    },5000)
                })

            setNewName("")
            setNewPhone("")


        } else {
            const edit = copy.filter(pers => {return pers.name===newName})[0]
            console.log(edit)
            if (window.confirm(`${edit.name} will be updated. Continue?`)) {
                console.log(copy.indexOf(edit))
                copy[copy.indexOf(edit)] = { name: newName, number: newPhone, id: edit.id }
                personsService.update(edit.id, { name: newName, number: newPhone, id: edit.id })
                setPersons(copy)
                setApplyMessage(`${newName} updated` )
                    setTimeout(()=> {
                        setApplyMessage(null)
                    },5000)
                
            }
        }
    }
    return (
        <div>
        <Notification message={applyMEssage} />
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