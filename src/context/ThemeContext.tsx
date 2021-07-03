import { ReactNode } from 'react'
import { createContext, useState } from 'react'

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
}

type ThemeContextProps = {
  children: ReactNode
} 

export const ThemeContext = createContext({} as ThemeContextType)

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}
