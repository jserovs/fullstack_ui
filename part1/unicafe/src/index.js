import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    
    const sum = () => {
        // console.log(props.good + props.neutral + props.bad)
        return props.good + props.neutral + props.bad
    }

    if (sum() > 0) {
        return (
            <div>
            <h2>Stats</h2>
            <Statistic text='Good' value={props.good} />
            <Statistic text='Neutral' value={props.neutral} />
            <Statistic text='Bad' value={props.bad} />
            <Statistic text='all' value={sum()} />

            <Statistic text='average' value={(props.good + props.bad) / sum() * 100} />
            </div>
        )
    } else {
        return (
            <h2>
                No Feedback
            </h2>
        )
    }

}

const Statistic = (props) => {

    return (
        <div>
            {props.text} {props.value}
        </div>
    )

}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text='Good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='Bad' />
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)