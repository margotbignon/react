import "./Container.css"
import { useState, useRef } from "react"


export default function Container() {

  const [state, setState] = useState("")
  const emailRef = useRef()

  function handleInput(e) {
    setState(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(emailRef.current.value)
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom</label>
        <input 
        onChange={handleInput}
        value={state}
        type="text"
        id="name" 
        />
        {!state && <p>Veuillez remplir cet input</p>}
      <label htmlFor="email">Votre email</label>
        <input type="email" 
        ref={emailRef}
        id="email"
        />
        <button>Envoyer</button>
      </form>
      <p>Votre pseudo : {state}</p>
    </div>
  )
}
