import "./Container.css"
import { useState } from "react"

export default function Container() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenue sur NotesMania</h1> 
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quasi ex temporibus quas a nesciunt quibusdam possimus natus iure recusandae adipisci corporis omnis cumque veritatis nam neque odio, beatae nemo?</p>

      <button onClick={() => setDarkMode(!darkMode)}>Activer le {darkMode ? "Light Mode" : "Dark mode"} </button>
    </div>
  )
}
