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
  return (
    <div>
      <p>Number of exercises {params.number}</p>
    </div>
  )
}

const Part = (params) => {
  return (
    <p>{params.part} {params.exercise}</p>
  )
}

const Content = (params) => {
  console.log(params)
  return (    
    <div>
      <p>hello</p>
      <Part part={params.part1.name} exercise={params.part1.exercises} />
      <Part part={params.part2.name} exercise={params.part2.exercises} />
      <Part part={params.part3.name} exercise={params.part3.exercises} />
      {/* <Part part={params.part2} exercise={params.exercise2} />
      <Part part={params.part3} exercise={params.exercise3} />  */}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (

      <div>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3}/>
        <Total number={part1.exercises+part2.exercises+part3.exercises} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))