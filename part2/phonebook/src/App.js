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
  },[])

  const [filter, setFilter] = useState("")

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} filter={filter}/>
    </div>
  )
}

export default App