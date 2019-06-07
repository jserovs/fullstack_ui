import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    let count = props.good+props.neutral+props.bad
    return (
        <div>
        <h1>Stats</h1>
        <div>good {props.good}</div>
        <div>neutral {props.neutral}</div>
        <div>bad {props.bad}</div>
        <div>all {count}</div>
        <div>average {(props.good-props.bad)/count}</div>
        <div>positive {props.good/count*100} %</div>
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [ counter, setCounter ] = useState(0)



  return (
    <div>
        <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral +1)}> 
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)