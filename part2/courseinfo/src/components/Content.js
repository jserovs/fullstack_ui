import React from 'react'
import Part from './Part'

const Content = ({ content }) => {
   let sum = content.reduce((accum, current) => accum + current.exercises, 0)
   return (
      <div>
      {content.map(part => <Part key={part.id} part={part}/>)}
      <b>Total of {sum} exercises</b>
      </div>
    )
}

export default Content