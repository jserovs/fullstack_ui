import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(()=>{
    console.log('effect')
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('got date')
        setPersons(response.data)
      })
  },[])

  const [filter, setFilter] = useState("")

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App