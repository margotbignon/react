import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false)

  return (
    <div>
      <form>
        <label htmlFor="consent">Acceptez-vous ?</label>
        <input onClick={() => setValidation(!validation)}  type="checkbox"/>
        <p className= {`${validation ? "valid" : "invalid"}`}>{validation ? "Bravo, vous pouvez envoyer le formulaire" : "Vous devez cocher la case"}</p>

      </form>
    </div>
  )
}
