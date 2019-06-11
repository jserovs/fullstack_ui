import React, { useState } from 'react'
import Button from './Button'
import Person from './Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '0000000'}
  ])
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
      copy.push({name: newName, phone: newPhone})
      setPersons(copy)
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <Button text='add' handleClick={addPerson} />
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default App