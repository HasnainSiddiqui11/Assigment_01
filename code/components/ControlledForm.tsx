"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useTheme } from "../contexts/ThemeContext"

const ControlledForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  })
  const { login, isLoggedIn } = useAuth()
  const { theme } = useTheme()

  // useEffect to log form updates
  useEffect(() => {
    console.log("Form updated:", formData)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      login(formData.name, formData.email)
    }
  }

  if (isLoggedIn) {
    return (
      <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"} shadow-md`}>
        <h2 className="text-xl font-semibold mb-4">Welcome! You are logged in.</h2>
      </div>
    )
  }

  return (
    <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"} shadow-md`}>
      <h2 className="text-xl font-semibold mb-4">Controlled Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${theme === "dark" ? "bg-gray-600 border-gray-500 text-white" : "bg-white border-gray-300"}`}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${theme === "dark" ? "bg-gray-600 border-gray-500 text-white" : "bg-white border-gray-300"}`}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${theme === "dark" ? "bg-gray-600 border-gray-500 text-white" : "bg-white border-gray-300"}`}
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </form>
      {!isLoggedIn && <p className="mt-2 text-gray-600 dark:text-gray-300">Please log in.</p>}
    </div>
  )
}

export default ControlledForm
