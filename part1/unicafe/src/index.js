import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [ counter, setCounter ] = useState(0)

  let count = good+neutral+bad

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
      <h1>Stats</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {count}</div>


      <div>average {(good-bad)/count}</div>

      <div>positive {good/count*100} %</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)