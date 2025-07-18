"use client"

import type React from "react"
import { ThemeProvider } from "../contexts/ThemeContext"
import { AuthProvider } from "../contexts/AuthContext"
import Header from "../components/Header"
import Counter from "../components/Counter"
import ControlledForm from "../components/ControlledForm"
import UserCard from "../components/UserCard"
import { useUsers } from "../hooks/useUsers"
import { useTheme } from "../contexts/ThemeContext"

const AppContent: React.FC = () => {
  const { users, loading, error } = useUsers()
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <Header title="React Assignment 2" />

      <div className="container mx-auto p-4 space-y-6">
        <Counter />

        <ControlledForm />

        <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"} shadow-md`}>
          <h2 className="text-xl font-semibold mb-4">Fetched Users</h2>
          {loading && <p>Loading users...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} name={user.name} email={user.email} phone={user.phone} website={user.website} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  )
}
