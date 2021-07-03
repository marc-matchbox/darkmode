import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <header>
      <div>
        <h2>Nome da Aplicação</h2>
      </div>
      <div>
        <button type="button" onClick={toggleTheme}> Alterar Tema </button>
      </div>
    </header>
  )
}