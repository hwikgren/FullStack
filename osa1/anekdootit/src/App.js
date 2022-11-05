import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Random = () => {
  let random = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
  console.log(random)
  return (
    random
    
  )
}

const GetWinning = (points) => {
  console.log('Winning:', points.indexOf(Math.max(...points)));
  return (
    points.indexOf(Math.max(...points))
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0 , 0, 0])
  const [selected, setSelected] = useState(0)

  const handleNext = () => {
    setSelected(Random)
  }

  const handleVotes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    //console.log(points)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVotes} text='Vote' />
      <Button handleClick={handleNext} text='Next anecdote' />
      <h2>Anecdote with the most votes:</h2>
      <p>{anecdotes[GetWinning(points)]}</p>
      <p>has {points[GetWinning(points)]} votes</p>
    </div>
  )
}

export default App
