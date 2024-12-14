import { useState } from 'react'
import { add } from './utils'
import AdditionError from './errors/AdditionError'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(0)
  const [error, setError] = useState('')

  const handleCalculateSum = () => {
    try {
      setResult(add(input))
      setError('')
    } catch (error) {
      setError(error instanceof AdditionError ? error.message : 'An unknown error occurred')
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col gap-4 items-center justify-center p-4">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleCalculateSum}>Calculate</button>
        {(!error && !Number.isNaN(result)) ? <p className="text-green-500">{result}</p> : <p className="text-red-500">Invalid input</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
  )
}

export default App
