
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>WatchOrder is working</h1>
      <p>Find the perfect order to watch your favourite franchises.</p>

      <h2>Times clicked: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App
