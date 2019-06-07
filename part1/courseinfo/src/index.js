import React from 'react'
import ReactDOM from 'react-dom'

const Header = (params) => {
  console.log (params)
  return (
    <div>
      <h1>{params.course}</h1>
    </div>
  )
}

const Total = (params) => {
  let sum=0
  params.parts.forEach(part => {
    console.log(part)
    sum+=part.exercises
  })
  return (    
    <div>
      <p>Number of exercises {sum}</p>     
    </div>
  )
}

const Content = (params) => {
  console.log(params)
  return (    
    <div>
     {params.parts.map(part => <p>{part.name} {part.exercises}</p>)}
    </div>
  )
}

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

  return (

      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))