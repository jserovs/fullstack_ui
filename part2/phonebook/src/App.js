import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personsService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsService.getAll().then(response => {
      setPersons(response.data)
    })
  }, [])

  const [applyMessage, setApplyMessage] = useState(
    {message: null, style: null}
  )

  const [filter, setFilter] = useState("")

  const Notification = ({ message, style }) => {
    console.log("style: "+style + " message: " + message)
    if (message === null) {
      return null
    }
    return (
      <div className={style}>
        {message}
      </div>
    )
  }


  return (
    <div>
      <Notification message={applyMessage.message} style={applyMessage.style}/>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} applyMessage={applyMessage} setApplyMessage={setApplyMessage} />
      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} filter={filter} setApplyMessage={setApplyMessage} />
    </div>
  )
}

export default App