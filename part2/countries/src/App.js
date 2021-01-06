import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'
import './App.css';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  const [filter, setFilter] = useState("")
  
  return (
    <div>
      <h2>Best countries</h2>
    <Filter filter={filter} setFilter={setFilter}/>
    <Countries countries={countries} filter={filter}/>
    </div>
  );
}

export default App;
