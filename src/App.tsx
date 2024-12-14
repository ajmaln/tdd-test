import { useState } from 'react'
import { add } from './utils'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(0)

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col gap-4 items-center justify-center p-4">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setResult(add(input))}>Calculate</button>
        <p>{result}</p>
      </div>
  )
}

export default App
