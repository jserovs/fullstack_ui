import React from 'react'
import ReactDOM from 'react-dom'

const Header = (params) => {
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
  return (
    <div>
      <Part part={params.part1} exercise={params.exercise1} />
      <Part part={params.part2} exercise={params.exercise2} />
      <Part part={params.part3} exercise={params.exercise3} />
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (

      <div>
        <Header course={course} />
        <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
        <Total number={exercises1+exercises2+exercises3} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))