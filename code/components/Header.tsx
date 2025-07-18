"use client"

import type React from "react"
import { useAuth } from "../contexts/AuthContext"
import { useTheme } from "../contexts/ThemeContext"

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { isLoggedIn, user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={`p-4 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-blue-500 text-white"}`}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm">Status: {isLoggedIn ? `Logged In as ${user?.name}` : "Logged Out"}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={toggleTheme} className="px-3 py-1 bg-white text-blue-500 rounded text-sm hover:bg-gray-100">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          {isLoggedIn && (
            <button onClick={logout} className="px-3 py-1 bg-white text-blue-500 rounded text-sm hover:bg-gray-100">
              Logout
            </button>
          )}
        </div>
      </div>
      <h1 className="text-2xl font-bold mt-2">{title}</h1>
    </header>
  )
}

export default Header
