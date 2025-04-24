"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark")

  const setThemeValue = (value) => {
    setTheme(value)
    localStorage.setItem("theme", value)

    if (value === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme) {
      setThemeValue(storedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeValue("dark")
    } else {
      setThemeValue("light")
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>{children}</ThemeContext.Provider>
}
