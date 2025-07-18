"use client"

import type React from "react"
import { useTheme } from "../contexts/ThemeContext"

interface UserCardProps {
  name: string
  email: string
  phone?: string
  website?: string
}

const UserCard: React.FC<UserCardProps> = ({ name, email, phone, website }) => {
  const { theme } = useTheme()

  return (
    <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"} shadow-md border`}>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{email}</p>
      {phone && <p className="text-sm text-gray-500 dark:text-gray-400">📞 {phone}</p>}
      {website && <p className="text-sm text-gray-500 dark:text-gray-400">🌐 {website}</p>}
    </div>
  )
}

export default UserCard
