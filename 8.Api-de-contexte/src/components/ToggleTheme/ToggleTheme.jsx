import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import "./ToggleTheme.css"
import { ThemeContext } from "../../context/ThemeProvider"
import { useContext } from "react"


export default function ToggleTheme() {

  const {toggleTheme, darkMode} = useContext(ThemeContext)

  return (
    <button
        className="toggle-theme-btn"
        onClick={toggleTheme}
    >
        <span>Go {darkMode ? "Light" : "Dark"}</span>
        <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  )
}