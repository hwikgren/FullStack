import { useState } from 'react'
import React from 'react'

const Heading = (props) => {
  return (
    <h2>{props.text}</h2>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = ({ text, value }) => {
  if (text === "Positive feedback:") {
    return (
      <tr><td>{text}</td><td>{value.toFixed(2)} %</td></tr>
    )
  }
  else if (text === "Average feedback:") 
  return (
    <tr><td>{text}</td><td>{value.toFixed(2)}</td></tr>
  )
  else {
    return (
      <tr><td>{text}</td><td>{value}</td></tr>
    )
  }
}

const Statistics = ({ good, neutral, bad, feedbacks }) => {
  if (feedbacks > 0) {
    return (
      <table>
        <tbody>
        <StatisticsLine text="Good:" value={good} />
        <StatisticsLine text="Neutral:" value={neutral} />
        <StatisticsLine text="Bad:" value= {bad} />
        <StatisticsLine text="Number of feedbacks:" value={feedbacks} />
        <StatisticsLine text="Average feedback:" value={good - bad / feedbacks} />
        <StatisticsLine text="Positive feedback:" value={good/feedbacks*100} />
        </tbody>
      </table>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticsLine text="No feedback given" value="" />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbacks, increment] = useState(0)

  return (
    <div>
    <Heading text="Give feedback" />
      <Button handleClick={() => {setGood(good + 1); increment(feedbacks+1)}} text="Good" />
      <Button handleClick={() => {setNeutral(neutral+1); increment(feedbacks+1)}} text="Neutral" />
      <Button handleClick={() => {setBad(bad + 1); increment(feedbacks+1)}} text="Bad" />
      <Heading text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} feedbacks={feedbacks} />
    </div>
  )
}

export default App
