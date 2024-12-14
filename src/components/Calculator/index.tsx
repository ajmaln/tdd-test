import { useState } from "react"
import ErrorMessage from "../ErrorMessage"
import AdditionError from "../../errors/AdditionError"
import { add } from "../../utils"


const Calculator = () => {
    const [input, setInput] = useState('')
    const [result, setResult] = useState(0)
    const [error, setError] = useState('')
  
    const handleCalculateSum = () => {
      try {
        setResult(add(input))
        setError('')
      } catch (error) {
        if (error instanceof AdditionError) {
          setError(error.message)
        } else {
          setError('An unknown error occurred')
        }
      }
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Sum Calculator</h1>
          <div className="mb-6 text-sm text-gray-600 space-y-2">
            <p>
              Enter numbers separated by commas or new lines:
              <code className="mx-1 px-2 py-1 bg-gray-100 rounded">1,2,3</code> or <br />
            </p>
            <code className="px-2 py-1 bg-gray-100 rounded block">1<br />2<br />3</code>
            <p>
              For using a custom delimiter, start with //[delimiter] followed by numbers on a new line:
              <code className="block mt-1 px-2 py-1 bg-gray-100 rounded">
                //;<br />
                1;2;3
              </code>
            </p>
            <p>
              Negative numbers are not allowed
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="numbers" className="block text-sm font-medium text-gray-700 mb-2">
                Enter numbers
              </label>
              <textarea
                id="numbers"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-32 border-2 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                placeholder="Enter numbers here..."
              />
            </div>
  
            <button
              onClick={handleCalculateSum}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-semibold shadow-sm"
            >
              Calculate Sum
            </button>
            {error ? (
              <ErrorMessage error={error} onClose={() => {
                setError('')
                setResult(0)
              }} />
            ) : (
              Number.isNaN(result) ?
                <ErrorMessage error="Invalid input" onClose={() => setResult(0)} /> :
                (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Total Sum</p>
                    <p className="text-3xl font-bold text-gray-800">{result}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    )
}

export default Calculator