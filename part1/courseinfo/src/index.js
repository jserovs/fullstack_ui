import React from 'react'
import ReactDOM from 'react-dom'
import Course from './'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  let sum=0
  parts.forEach(part => {
    console.log(part)
    sum+=part.exercises
  })

  return (

      <div>
        <h1>{course}</h1>
        {parts.map(part => <p>{part.name} {part.exercises}</p>)}        
        <p>Number of exercises {sum}</p>  
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))