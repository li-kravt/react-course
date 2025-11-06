
import './index.css'
import { Counter } from './components/Counter'
import { Input } from './components/Input'

function App() {


  return (
    <div className='App'>
      <Input className='input' />
      <div className='counters'>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  )
}

export default App
