import { useState } from "react"

export const Input = () => {
  const [text, setText] = useState("hi")

  return (<>
    <h3>{text}</h3>
    <input type="text"
      className='input'
      value={text}
      onChange={e => setText(e.target.value)} />
  </>
  )
}