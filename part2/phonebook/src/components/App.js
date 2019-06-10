import React, { useState } from 'react'
import Button from './Button'
import Person from './Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('test')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    console.log(persons)
    event.preventDefault()
    const copy = [...persons]
    if (persons.find(person => person.name === newName) === undefined) {
      copy.push({name: newName})
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
          name: <input value={newName} onChange={handleNoteChange} />
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