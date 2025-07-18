"use client"

import type React from "react"
import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  const { theme } = useTheme()

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)

  return (
    <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"} shadow-md`}>
      <h2 className="text-xl font-semibold mb-4">Counter: {count}</h2>
      <div className="flex gap-2">
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          +
        </button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
