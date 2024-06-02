import { useState } from "react"
import Card from "./Card"

export default function Container() {
  
  const [state, setState] = useState("Hello World")

  const id = 4125

  return (
    <div>
      <p>Statut du container : {state}</p>
      <Card id={id} state ={state} changeState= {setState}/>
    </div>
  )
}
