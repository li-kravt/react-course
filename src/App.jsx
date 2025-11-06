import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [text, setText] = useState("hi")

  const likesToIncrement = () => {
    setLikes(likes + 1)
    console.log("in:", likes)
  }
  const likesToDecrement = () => {
    setLikes(likes - 1)
    console.log("dec:", likes)
  }
  return (
    <>
      <h3>{text}</h3>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={likesToIncrement}>Incremet</button>
      <button onClick={likesToDecrement}>Decremet</button>
      <p>{likes}</p>
    </>
  )
}

export default App
